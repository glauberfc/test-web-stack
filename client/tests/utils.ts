import { faker } from '@faker-js/faker'

export function generateNewUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    description: faker.lorem.sentence(),
  }
}
