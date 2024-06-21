import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client/extension'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const auction = await prisma.job.find({
        where: {
          auction: true,
        },
      })
      res.json(auction)
    } catch (e) {
      console.error(e)
      res.status(500)
    }
  }
}
