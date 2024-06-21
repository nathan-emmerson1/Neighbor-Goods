import { auth } from '@/auth'
import { PrismaClient } from '@prisma/client/extension'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth()

  if (req.method === 'GET') {
    const id = req.body || session?.user?.id
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
        include: {
          user_details: true,
        },
      })

      res.json(user)
    } catch (e) {
      console.error(e)
      res.status(500)
    }
  }
}
