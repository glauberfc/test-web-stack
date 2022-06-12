import { ITEMS_PER_PAGE } from '@constants'

export function getPaginationVariables(page: number) {
  return {
    limit: !page ? ITEMS_PER_PAGE : page * ITEMS_PER_PAGE,
    offset: 0,
  }
}

export function getRandomUserPictureUrl() {
  const pictureNumber = Math.floor(Math.random() * 20)
  const typeNumber = Math.floor(Math.random() * 2)
  const pictureType = ['men', 'women']
  return `https://randomuser.me/api/portraits/${pictureType[typeNumber]}/${pictureNumber}.jpg`
}
