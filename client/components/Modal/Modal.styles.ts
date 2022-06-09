import styled from '@emotion/styled'

export const Overlay = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 10,
})

export const Container = styled.div(({ theme }) => ({
  flex: 1,
  maxWidth: '460px',
  padding: '40px 22px',
  backgroundColor: theme.colors.base,
  borderRadius: '4px',
}))
