import { Container, Overlay } from './Modal.styles'

type ModalProps = {
  isOpen: boolean
  children: React.ReactNode
}

export default function Modal({ isOpen, children }: ModalProps) {
  return isOpen ? (
    <Overlay>
      <Container role="dialog" aria-labelledby="edit-user-modal">
        {children}
      </Container>
    </Overlay>
  ) : null
}
