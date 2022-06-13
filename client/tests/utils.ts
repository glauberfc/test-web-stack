import {
  randFullName,
  randSentence,
  randStreetAddress,
  randUuid,
} from '@ngneat/falso'

export function generateNewUser() {
  return {
    id: randUuid(),
    name: randFullName(),
    address: randStreetAddress(),
    description: randSentence(),
  }
}
