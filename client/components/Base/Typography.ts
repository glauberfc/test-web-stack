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
