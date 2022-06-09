import styled from '@emotion/styled'

export const Header = styled.header(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '30px',
  maxWidth: theme.screens.xl,
  margin: '64px auto 0',
}))

export const MainSection = styled.main(({ theme }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: theme.screens.xl,
  minHeight: '100vh',
  margin: '0 auto',
}))

export const Grid = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '64px',
  width: '100%',
  marginTop: '64px',
})
