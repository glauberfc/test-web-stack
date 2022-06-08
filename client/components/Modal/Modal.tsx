import styles from './Modal.module.css'

type ModalProps = {
  isOpen: boolean
  children: React.ReactNode
}

export default function Modal({ isOpen, children }: ModalProps) {
  return isOpen ? (
    <div className={styles.overlay}>
      <div
        className={styles.container}
        role="dialog"
        aria-labelledby="edit-user-modal"
      >
        {children}
      </div>
    </div>
  ) : null
}
