import styled from '@emotion/styled'
import Image from 'next/image'

export const AvatarContainer = styled.div({
  width: '168px',
  height: '168px',
  position: 'relative',
  margin: '0 auto',
})

export const Avatar = styled(Image)({
  borderRadius: '50%',
})
