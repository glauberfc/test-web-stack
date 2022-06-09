import styled from '@emotion/styled'

const maxWidth = '820px'

export const Header = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '30px',
  maxWidth: maxWidth,
  margin: '114px auto 0',
})

export const MainSection = styled.main({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: maxWidth,
  minHeight: '100vh',
  margin: '0 auto',
})

export const Grid = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: '800px',
  marginTop: '34px',
})
