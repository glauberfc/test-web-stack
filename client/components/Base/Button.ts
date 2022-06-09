import { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { defaultTransition } from 'styles/theme'

const buttonVariants = (theme: Theme) => ({
  primary: {
    background: theme.colors.base,
  },
  secondary: {
    background: theme.colors.gray100,
  },
})

type ButtonProps = {
  variant?: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>(
  {
    width: '280px',
    height: '90px',
    border: '4px solid rgba(0, 0, 0, 0.1)',
    padding: '11px 14px',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '1.875rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: defaultTransition,
    '&:hover:not(:disabled)': {
      border: '4px solid rgba(0, 0, 0, 0.4)',
    },
    '&:focus:not(:disabled)': {
      border: '4px solid rgba(0, 0, 0, 0.5)',
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, 0.5)',
    },
  },
  ({ variant = 'primary', theme }) => buttonVariants(theme)[variant],
)

export default Button
