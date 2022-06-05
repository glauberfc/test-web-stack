import { Users as User } from 'graphql/generated'
import { MouseEvent, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
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
  const { isOpen, onClose, selectedUser } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: selectedUser,
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  function handleCancelClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    onClose()
  }

  function showInputError(inputName: InputName) {
    return errors[inputName] ? (
      <span role="alert">{errors[inputName]?.message}</span>
    ) : null
  }

  return isOpen ? (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <h2>Edit user</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="inputName">Name</label>
          <input id="inputName" {...register('name', { required: true })} />
          {showInputError('name')}

          <label htmlFor="inputAddress">Location</label>
          <input
            id="inputAddress"
            {...register('address', { required: true })}
          />
          {showInputError('address')}

          <label htmlFor="inputDescription">Description</label>
          <input
            id="inputDescription"
            {...register('description', { required: true })}
          />
          {showInputError('description')}

          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  ) : null
}
