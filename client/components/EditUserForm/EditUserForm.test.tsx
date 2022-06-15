import { ReactNode } from 'react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { ThemeProvider } from '@emotion/react'
import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GraphQLError } from 'graphql'

import { UpdateUsersDocument } from 'graphql-files/generated'
import EditUserForm from './EditUserForm'
import theme from 'styles/theme'
import { generateNewUser } from 'tests/utils'

type AllProvidersProps = {
  children: ReactNode
  mocks?: ReadonlyArray<MockedResponse>
}

function AllProviders({ children, mocks = [] }: AllProvidersProps) {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MockedProvider>
  )
}

const user = generateNewUser()

describe('Edit user modal', () => {
  it('should work if receives a user', () => {
    render(
      <AllProviders>
        <EditUserForm user={user} onSubmitSuccess={() => null} />,
      </AllProviders>,
    )

    expect(screen.getByLabelText(/name/i)).toHaveValue(user.name)
    expect(screen.getByLabelText(/location/i)).toHaveValue(user.address)
    expect(screen.getByLabelText(/description/i)).toHaveValue(user.description)
  })

  it('should handle errors', async () => {
    const { id, ...restProps } = user
    const mock = {
      request: {
        query: UpdateUsersDocument,
        variables: { id: { _eq: id }, _set: { ...restProps } },
      },
      result: {
        data: {},
        errors: [new GraphQLError('Error!')],
      },
    }

    render(
      <AllProviders mocks={[mock]}>
        <EditUserForm user={user} onSubmitSuccess={() => null} />,
      </AllProviders>,
    )

    const saveButton = screen.getByRole('button', { name: /save/i })
    await userEvent.click(saveButton)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    expect(await screen.findAllByRole('alert')).toHaveLength(1)
  })

  it('should show errors correctly for each input', async () => {
    render(
      <AllProviders>
        <EditUserForm user={user} onSubmitSuccess={() => null} />,
      </AllProviders>,
    )

    const name = screen.getByLabelText(/name/i)
    const location = screen.getByLabelText(/location/i)
    const description = screen.getByLabelText(/description/i)
    const saveButton = screen.getByRole('button', { name: /save/i })

    await userEvent.clear(name)
    await userEvent.click(saveButton)
    expect(await screen.findAllByRole('alert')).toHaveLength(1)

    await userEvent.clear(location)
    await userEvent.click(saveButton)
    expect(await screen.findAllByRole('alert')).toHaveLength(2)

    await userEvent.clear(description)
    await userEvent.click(saveButton)
    expect(await screen.findAllByRole('alert')).toHaveLength(3)
  })
})
