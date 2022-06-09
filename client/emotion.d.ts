import '@emotion/react'
import { colors, screens } from 'styles/theme'
import { LibTheme } from 'some-lib'

declare module '@emotion/react' {
  export interface Theme {
    colors: Record<keyof typeof colors, string>
    screens: Record<keyof typeof screens, string>
  }
}

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
