import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Overlay = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 10,
  overflow: 'auto',
  animation: `${fadeIn} 0.2s ease-in-out`,
})

export const Container = styled.div(({ theme }) => ({
  flex: 1,
  maxWidth: '749px',
  padding: '64px',
  borderRadius: '8px',
  backgroundColor: theme.colors.gray100,
}))
