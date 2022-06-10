/** @jsxImportSource @emotion/react */
import { NetworkStatus } from '@apollo/client'
import Button from 'components/Base/Button'
import { H1, Paragraph } from 'components/Base/Typography'
import EditUserForm from 'components/EditUserForm/EditUserForm'
import Modal from 'components/Modal/Modal'
import SearchInput from 'components/SearchInput/SearchInput'
import UserCard from 'components/UserCard/UserCard'
import {
  Users as User,
  UsersDocument,
  useUsersQuery,
} from 'graphql-files/generated'
import { addApolloState, initializeApollo } from 'lib/apolloClient'
import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect, useState } from 'react'
import { Grid, Header, MainSection } from 'styles/Home.styles'
import { getPaginationVariables } from 'utils'

export type ModalStatus = {
  isOpen: boolean
  selectedUser?: Partial<User>
}

const Home: NextPage = () => {
  const router = useRouter()
  const [modalStatus, setModalStatus] = useState<ModalStatus>({ isOpen: false })
  const page = Number(router.query?.page)
  const defaultQueryVariables = getPaginationVariables(page)

  const { data, loading, error, fetchMore, refetch, networkStatus } =
    useUsersQuery({
      variables: defaultQueryVariables,
      notifyOnNetworkStatusChange: true,
    })

  const isLoading = loading || networkStatus === NetworkStatus.refetch
  const hasNextPage =
    Number(data?.users_aggregate.aggregate?.count) > Number(data?.users.length)

  async function handleFetchMore(event: MouseEvent<HTMLButtonElement>) {
    try {
      event.preventDefault()
      router.push(`/?page=${page + 1}`, undefined, {
        shallow: true,
      })
      await fetchMore({
        variables: {
          offset: data?.users?.length,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function searchCallback(value: string) {
    try {
      await refetch({ name: { _ilike: `%${value}%` } })
    } catch (error) {
      console.error(error)
    }
  }

  async function clearSearchCallback() {
    try {
      refetch({ ...defaultQueryVariables, name: {} })
    } catch (error) {
      console.error(error)
    }
  }

  function getButtonText() {
    if (isLoading) return 'Loading...'
    if (hasNextPage) return 'Load more'
    if (data?.users.length === 0) return 'No users found'
    return 'No more users'
  }

  useEffect(() => {
    if (!page) {
      router.push(`/?page=1`, undefined, { shallow: true })
    }
  }, [router, page])

  return (
    <div>
      <Head>
        <title>Superformula Web Developer Test</title>
        <meta name="description" content="Superformula Web Developer Test" />
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '64px',
            margin: '64px 0',
          }}
        >
          {error ? (
            <Paragraph
              css={{
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              {error.message}
            </Paragraph>
          ) : null}

          <Button
            type="button"
            onClick={handleFetchMore}
            disabled={!hasNextPage || isLoading}
          >
            {getButtonText()}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const { query } = context
  const page = Number(query?.page)

  try {
    await apolloClient.query({
      query: UsersDocument,
      variables: getPaginationVariables(page),
    })

    return addApolloState(apolloClient, {
      props: {},
    })
  } catch (error) {
    return {
      props: {},
    }
  }
}

export default Home
