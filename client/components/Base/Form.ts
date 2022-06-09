import { Theme } from '@emotion/react'
import styled from '@emotion/styled'

const alertProps = (theme: Theme) => ({
  marginTop: '8px',
  fontSize: '1rem',
  color: theme.colors.danger,
})

const inputProps = (theme: Theme) => ({
  height: '64px',
  padding: '16px',
  fontSize: '1.5rem',
  fontWeight: '400',
  borderRadius: '8px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  background: theme.colors.base,
})

export const FormGroup = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '> label': {
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '1.438rem',
    marginBottom: '8px',
  },
  '> input': {
    ...inputProps(theme),
  },
  '> span[role="alert"]': {
    ...alertProps(theme),
  },
}))

export const Alert = styled.span(({ theme }) => ({
  ...alertProps(theme),
}))

export const Input = styled.input(({ theme }) => ({
  ...inputProps(theme),
}))
