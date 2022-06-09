/** @jsxImportSource @emotion/react */
import Button from 'components/Base/Button'
import { FormGroup, Input } from 'components/Base/Form'
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
      <span role="alert">
        {errors[inputName]?.type === 'required'
          ? 'This field is required'
          : 'Please, type a valid value'}
      </span>
    ) : null
  }

  return (
    <div>
      <h2>Edit user</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '> div': {
            margin: '10px auto',
            width: '100%',
          },
        }}
      >
        <FormGroup>
          <label htmlFor="input-name">Name</label>
          <Input
            id="input-name"
            type="text"
            {...register('name', { required: true })}
          />
          {showInputError('name')}
        </FormGroup>

        <FormGroup>
          <label htmlFor="input-address">Location</label>
          <Input
            id="input-address"
            type="text"
            {...register('address', { required: true })}
          />
          {showInputError('address')}
        </FormGroup>

        <FormGroup>
          <label htmlFor="input-description">Description</label>
          <Input
            id="input-description"
            type="text"
            {...register('description', { required: true })}
          />
          {showInputError('description')}
        </FormGroup>

        {error && <span role="alert">{error.message}</span>}

        <div>
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
