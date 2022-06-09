import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const H1 = styled.h1({
  fontWeight: 300,
  fontSize: '3rem',
  lineHeight: '3.75rem',
})

export const H2 = styled.h2({
  fontWeight: 600,
  fontSize: '1.313rem',
  lineHeight: '1.625rem',
})

export const Paragraph = styled.p({
  fontWeight: 300,
  fontSize: '1rem',
  lineHeight: '1.25rem',
})

export const truncate = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const srOnly = css({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: '0',
})
