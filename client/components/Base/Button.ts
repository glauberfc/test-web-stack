import { Theme } from '@emotion/react'
import styled from '@emotion/styled'

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
  ({ theme }) => ({
    padding: '18px 15px',
    border: `2px solid ${theme.colors.gray200}`,
    lineHeight: '1',
    fontSize: '0.813rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderRadius: '3px',
    ':hover': {
      background: theme.colors.gray300,
    },
  }),
  ({ variant = 'primary', theme }) => buttonVariants(theme)[variant],
)

export default Button
