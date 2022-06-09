/** @jsxImportSource @emotion/react */
import Button from 'components/Base/Button'
import { H1 } from 'components/Base/Typography'
import EditUserForm from 'components/EditUserForm/EditUserForm'
import Modal from 'components/Modal/Modal'
import SearchInput from 'components/SearchInput/SearchInput'
import UserCard from 'components/UserCard/UserCard'
import { Users as User, useUsersQuery } from 'graphql-files/generated'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { Grid, Header, MainSection } from 'styles/Home.styles'

export type ModalStatus = {
  isOpen: boolean
  selectedUser?: Partial<User>
}

const Home: NextPage = () => {
  const router = useRouter()
  const [modalStatus, setModalStatus] = useState<ModalStatus>({ isOpen: false })
  const paginationRef = useRef(Number(router.query?.page))
  const itemsPerPage = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE)
  const defaultQueryVariables = {
    limit: !paginationRef.current
      ? itemsPerPage
      : paginationRef.current * itemsPerPage,
    offset: 0,
  }

  const { data, loading, fetchMore, refetch } = useUsersQuery({
    variables: defaultQueryVariables,
  })

  const hasNextPage =
    Number(data?.users_aggregate.aggregate?.count) > Number(data?.users.length)

  function handleFetchMore(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    paginationRef.current += 1
    router.push(`/?page=${paginationRef.current}`, undefined, { shallow: true })
    fetchMore({
      variables: {
        offset: data?.users?.length,
      },
    })
  }

  function searchCallback(value: string) {
    refetch({ name: { _ilike: `%${value}%` } })
  }

  function clearSearchCallback() {
    refetch({ ...defaultQueryVariables, name: {} })
  }

  useEffect(() => {
    if (!paginationRef.current) {
      router.push(`/?page=1`, undefined, { shallow: true })
      paginationRef.current = 1
    }
  }, [router])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <H1>Users list</H1>
        <SearchInput
          searchCallback={searchCallback}
          clearSearchCallback={clearSearchCallback}
        />
      </Header>
      <MainSection>
        <Grid>
          {data?.users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              description={user.description}
              onClick={() =>
                setModalStatus({ isOpen: true, selectedUser: user })
              }
            />
          ))}
        </Grid>

        <div
          css={{
            margin: '64px 0',
          }}
        >
          <Button
            type="button"
            onClick={handleFetchMore}
            disabled={!hasNextPage || loading}
          >
            {hasNextPage ? 'Load more' : 'No more users'}
          </Button>
        </div>

        <Modal isOpen={modalStatus.isOpen}>
          <EditUserForm
            user={modalStatus?.selectedUser ?? {}}
            onSubmitSuccess={() => {
              setModalStatus({
                isOpen: false,
                selectedUser: undefined,
              })
            }}
            onCancel={() =>
              setModalStatus({ isOpen: false, selectedUser: undefined })
            }
          />
        </Modal>
      </MainSection>
    </div>
  )
}

export default Home
