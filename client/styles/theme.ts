import { Theme } from '@emotion/react'

export const defaultTransition = 'all 0.2s ease-in-out'

export const colors = {
  base: '#fff',
  gray100: '#f8f8f8',
  gray200: '#e7e7e7',
  gray300: '#d1d5db',
  gray400: '#979797',
  danger: '#ef5350',
}

export const screens = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1328px',
}

const theme: Theme = {
  colors,
  screens,
}

export default theme
