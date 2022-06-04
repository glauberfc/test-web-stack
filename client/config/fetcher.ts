export const endpointUrl = process.env.NEXT_PUBLIC_HASURA_API_URL
export const fetchParams = {
  headers: {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_API_SECRET ?? '',
  },
}
