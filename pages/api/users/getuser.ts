import { auth } from '@/auth'
import { PrismaClient } from '@prisma/client/extension'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function getuser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth()

  if (!session?.user) return null

  const id = req.body || session.user.id

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      user_details: true,
    },
  })

  res.json(user)
}
