import styled from '@emotion/styled'
import * as colors from 'styles/colors'

const buttonVariants = {
  primary: {
    background: colors.base,
    color: colors.text,
  },
  secondary: {
    background: colors.gray100,
    color: colors.text,
  },
}

type ButtonProps = {
  variant?: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>(
  {
    padding: '18px 15px',
    border: `2px solid ${colors.gray200}`,
    lineHeight: '1',
    fontSize: '13px',
    borderRadius: '3px',
    ':hover': {
      background: colors.gray300,
    },
  },
  ({ variant = 'primary' }) => buttonVariants[variant],
)

export default Button
