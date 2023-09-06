import { GetSessionParams, getSession } from 'next-auth/react'

export default async function getAuth(params?: GetSessionParams) {
  const session = await getSession(params)

  return {
    user: session?.user
  }
}