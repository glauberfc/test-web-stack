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
    <>
      <h2>Edit user</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          type="text"
          {...register('name', { required: true })}
        />
        {showInputError('name')}

        <label htmlFor="input-address">Location</label>
        <input
          id="input-address"
          type="text"
          {...register('address', { required: true })}
        />
        {showInputError('address')}

        <label htmlFor="input-description">Description</label>
        <input
          id="input-description"
          type="text"
          {...register('description', { required: true })}
        />
        {showInputError('description')}

        {error && <span role="alert">{error.message}</span>}

        <button type="submit" disabled={isSubmitting}>
          Save
        </button>
        <button
          type="button"
          onClick={handleCancelClick}
          disabled={isSubmitting}
        >
          Cancel
        </button>
      </form>
    </>
  )
}
