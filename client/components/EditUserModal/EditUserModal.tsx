import { Users as User, useUpdateUsersMutation } from 'graphql-files/generated'
import { MouseEvent } from 'react'
import { useForm } from 'react-hook-form'
import styles from './EditUserModal.module.css'

type Inputs = {
  name: string
  address: string
  description: string
}

type InputName = 'name' | 'address' | 'description'

type EditUserModalProps = {
  isOpen: boolean
  selectedUser?: Partial<User>
  onClose: () => void
}

export default function EditUserModal(props: EditUserModalProps) {
  const { onClose, selectedUser } = props
  const [updateUsers, { error }] = useUpdateUsersMutation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    defaultValues: {
      name: selectedUser?.name,
      address: selectedUser?.address,
      description: selectedUser?.description,
    },
  })

  async function onSubmit(data: Inputs) {
    try {
      await updateUsers({
        variables: {
          id: { _eq: selectedUser?.id },
          _set: { ...data },
        },
      })
      onClose()
    } catch (error) {
      console.error(error)
    }
  }

  function handleCancelClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    onClose()
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
    <div className={styles.overlay}>
      <div
        className={styles.container}
        role="dialog"
        aria-labelledby="edit-user-modal"
      >
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
      </div>
    </div>
  )
}
