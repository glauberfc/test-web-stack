import { useEffect } from 'react'
import { Container, Overlay } from './Modal.styles'

type ModalProps = {
  isOpen: boolean
  children: React.ReactNode
}

export default function Modal({ isOpen, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return isOpen ? (
    <Overlay>
      <Container role="dialog" aria-labelledby="edit-user-modal">
        {children}
      </Container>
    </Overlay>
  ) : null
}
