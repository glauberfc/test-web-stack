export function getPaginationVariables(page: number) {
  const itemsPerPage = Number(
    typeof window === undefined
      ? process.env.ITEMS_PER_PAGE
      : process.env.NEXT_PUBLIC_ITEMS_PER_PAGE,
  )
  return {
    limit: !page ? itemsPerPage : page * itemsPerPage,
    offset: 0,
  }
}

export function getRandomUserPictureUrl() {
  const pictureNumber = Math.floor(Math.random() * 20)
  const typeNumber = Math.floor(Math.random() * 2)
  const pictureType = ['men', 'women']
  return `https://randomuser.me/api/portraits/${pictureType[typeNumber]}/${pictureNumber}.jpg`
}
