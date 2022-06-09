import styled from '@emotion/styled'
import { defaultTransition } from 'styles/theme'

export const Card = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  borderRadius: '8px',
  backgroundColor: theme.colors.base,
  transition: defaultTransition,
  '> *': {
    transition: defaultTransition,
  },
  ':hover': {
    cursor: 'pointer',
    filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))',
  },
}))
