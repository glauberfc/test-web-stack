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
