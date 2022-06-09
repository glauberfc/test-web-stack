/** @jsxImportSource @emotion/react */
import { Avatar, AvatarContainer } from 'components/Base/Avatar'
import { Card } from 'components/Base/Card'
import { H2, Paragraph, truncate } from 'components/Base/Typography'
import EditIcon from 'components/Icons/EditIcon'

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
        ':not(:hover) > svg': {
          opacity: 0,
        },
      }}
    >
      <EditIcon
        css={(theme) => ({
          position: 'absolute',
          top: '18px',
          right: '23px',
          fill: theme.colors.gray400,
        })}
      />
      <AvatarContainer>
        <Avatar
          src="https://randomuser.me/api/portraits/women/73.jpg"
          alt="User picture"
          layout="fill"
          objectFit="cover"
        />
      </AvatarContainer>
      <H2 css={[truncate, { marginTop: '32px' }]}>{name}</H2>
      <Paragraph css={[truncate, { maxWidth: '279px', marginTop: '8px' }]}>
        {description}
      </Paragraph>
    </Card>
  )
}
