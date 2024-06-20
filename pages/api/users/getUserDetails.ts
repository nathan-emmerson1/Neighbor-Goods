import { NextApiRequest, NextApiResponse } from 'next'
import { UserDetails } from '../../../models/userDetails'
import { PrismaClient } from '@prisma/client'
import { auth } from '../../../auth'

const prisma = new PrismaClient()

export default async function getCurrentUser(): Promise<UserDetails | null> {
  const session = await auth()

  if (!session?.user) return null

  const currentUser: UserDetails = prisma.UserDetails.findFirst({
    where: {
      user_id: session.user.id,
    },
  })

  return currentUser
}
