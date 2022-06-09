/** @jsxImportSource @emotion/react */
import { Avatar, AvatarContainer } from 'components/Base/Avatar'
import { Card } from 'components/Base/Card'
import { H2, Paragraph, truncate } from 'components/Base/Typography'

type UserCardProps = {
  name: string
  description: string
  onClick?: () => void
}

export default function UserCard({
  onClick,
  name,
  description,
}: UserCardProps) {
  return (
    <Card
      data-testid="user-card"
      onClick={onClick}
      css={{
        width: '100%',
        maxWidth: '400px',
        height: '338px',
        padding: '40px 32px',
      }}
    >
      <AvatarContainer>
        <Avatar
          src="https://randomuser.me/api/portraits/women/73.jpg"
          alt="picture"
          layout="fill"
          objectFit="cover"
        />
      </AvatarContainer>
      <H2 css={[truncate, { marginTop: '32px' }]}>{name}</H2>
      <Paragraph css={[truncate, { marginTop: '8px' }]}>
        {description}
      </Paragraph>
    </Card>
  )
}
