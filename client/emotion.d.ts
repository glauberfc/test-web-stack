import '@emotion/react'
import * as colors from 'styles/colors'

declare module '@emotion/react' {
  export interface Theme {
    colors: Record<keyof typeof colors, string>
  }
}

// You are also able to use a 3rd party theme this way:
import '@emotion/react'
import { LibTheme } from 'some-lib'

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
