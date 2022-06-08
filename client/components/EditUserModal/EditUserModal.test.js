import { MockedProvider } from '@apollo/client/testing'
import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import EditUserModal from './EditUserModal'

const user = {
  id: '123456',
  name: 'Eric Scott',
  address: 'Some address',
  description: 'some description',
}

describe('Edit user modal', () => {
  it('should works if receives a user', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <div>
          <EditUserModal isOpen selectedUser={user} onClose={() => null} />,
        </div>
      </MockedProvider>,
    )

    expect(screen.getByLabelText(/name/i)).toHaveValue(user.name)
    expect(screen.getByLabelText(/location/i)).toHaveValue(user.address)
    expect(screen.getByLabelText(/description/i)).toHaveValue(user.description)
  })

  it('should show errors correctly for each input', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <div>
          <EditUserModal isOpen selectedUser={user} onClose={() => null} />,
        </div>
      </MockedProvider>,
    )

    await userEvent.clear(screen.getByLabelText(/name/i))
    expect(screen.getByLabelText(/name/i)).toHaveValue('')
    await userEvent.click(screen.getByRole('button', { name: /save/i }))
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it("shouldn't break if an user isn't passed", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <div>
          <EditUserModal isOpen selectedUser={{}} onClose={() => null} />,
        </div>
      </MockedProvider>,
    )

    expect(screen.getByLabelText(/name/i)).toHaveValue('')
    expect(screen.getByLabelText(/location/i)).toHaveValue('')
    expect(screen.getByLabelText(/description/i)).toHaveValue('')

    expect(screen.getByRole('button', { name: /save/i })).toBeDisabled()
  })
})
