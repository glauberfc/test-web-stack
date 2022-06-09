import { Theme } from '@emotion/react'
import styled from '@emotion/styled'

const alertProps = (theme: Theme) => ({
  marginTop: '5px',
  fontSize: '0.875rem',
  color: theme.colors.danger,
})

const inputProps = (theme: Theme) => ({
  padding: '10px 8px',
  borderRadius: '4px',
  border: `1px solid ${theme.colors.gray200}`,
  background: theme.colors.base,
  fontSize: '0.875rem',
})

export const FormGroup = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '> label': {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    marginBottom: '6px',
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
