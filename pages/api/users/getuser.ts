import { auth } from '@/auth'
import { PrismaClient } from '@prisma/client/extension'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const session = await auth(req, res)
    if (!session) {
      res.status(401)
    }
    const id = req.body || session?.user?.id
    try {
      const user = await prisma.userDetails.findUnique({
        where: {
          user_id: id,
        },
      })

      res.json(user)
    } catch (e) {
      console.error(e)
      res.status(500)
    }
  }
}
