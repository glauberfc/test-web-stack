import styled from '@emotion/styled'

const transition = 'all 0.2s ease-in-out'

export const Card = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  borderRadius: '8px',
  backgroundColor: theme.colors.base,
  transition,
  '> *': {
    transition,
  },
  ':hover': {
    cursor: 'pointer',
    filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))',
  },
}))
