/** @jsxImportSource @emotion/react */
import Button from 'components/Base/Button'
import { Alert, FormGroup } from 'components/Base/Form'
import { H1 } from 'components/Base/Typography'
import { Users as User, useUpdateUsersMutation } from 'graphql-files/generated'
import { MouseEvent } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  name: string
  address: string
  description: string
}

type InputName = 'name' | 'address' | 'description'

type EditUserFormProps = {
  user: Partial<User>
  onSubmitSuccess?: () => void
  onCancel?: () => void
}

export default function EditUserForm(props: EditUserFormProps) {
  const { user, onSubmitSuccess = () => null, onCancel = () => null } = props
  const [updateUsers, { error }] = useUpdateUsersMutation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    defaultValues: {
      name: user?.name ?? '',
      address: user?.address ?? '',
      description: user?.description ?? '',
    },
  })

  async function onSubmit(data: Inputs) {
    try {
      await updateUsers({
        variables: {
          id: { _eq: user?.id },
          _set: { ...data },
        },
      })
      onSubmitSuccess()
    } catch (error) {
      console.error(error)
    }
  }

  function handleCancelClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    onCancel()
  }

  function showInputError(inputName: InputName) {
    return errors[inputName] ? (
      <Alert role="alert">
        {errors[inputName]?.type === 'required'
          ? 'This field is required'
          : 'Please, type a valid value'}
      </Alert>
    ) : null
  }

  return (
    <div>
      <H1 css={{ marginBottom: '64px' }}>Edit user</H1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '& > div > div:not(:last-child)': {
            width: '100%',
            margin: '0 auto 22px',
          },
        }}
      >
        <div>
          <FormGroup>
            <label htmlFor="input-name">Name</label>
            <input
              id="input-name"
              type="text"
              {...register('name', { required: true })}
            />
            {showInputError('name')}
          </FormGroup>

          <FormGroup>
            <label htmlFor="input-address">Location</label>
            <input
              id="input-address"
              type="text"
              {...register('address', { required: true })}
            />
            {showInputError('address')}
          </FormGroup>

          <FormGroup>
            <label htmlFor="input-description">Description</label>
            <input
              id="input-description"
              type="text"
              {...register('description', { required: true })}
            />
            {showInputError('description')}
          </FormGroup>
        </div>

        {error && (
          <Alert role="alert" css={{ marginTop: '30px' }}>
            {error.message}
          </Alert>
        )}

        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '38px',
            marginTop: '38px',
            '> button': {
              width: '100%',
            },
          }}
        >
          <Button type="submit" disabled={isSubmitting}>
            Save
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancelClick}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
