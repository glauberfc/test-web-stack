/// <reference types="cypress" />

import { generateNewUser } from 'tests/utils'

describe('Edit user', () => {
  it('Should edit user', () => {
    const user = generateNewUser()

    cy.visit('/')
    cy.findByRole('main').within(() => {
      cy.findAllByTestId('user-card').first().click()
    })

    cy.findByRole('dialog').within(() => {
      cy.findByLabelText(/name/i).invoke('val').should('not.be.empty')
      cy.findByLabelText(/name/i).clear().type(user.name)

      cy.findByLabelText(/location/i)
        .invoke('val')
        .should('not.be.empty')
      cy.findByLabelText(/location/i)
        .clear()
        .type(user.address)

      cy.findByLabelText(/description/i)
        .invoke('val')
        .should('not.be.empty')
      cy.findByLabelText(/description/i)
        .clear()
        .type(user.description)

      cy.findByRole('button', { name: /save/i }).click()
    })

    cy.findByRole('dialog').should('not.exist')
    cy.findByRole('searchbox').type(user.name)

    cy.findByRole('main').within(() => {
      cy.findAllByTestId('user-card').should('have.length', 1)
    })
  })
})
