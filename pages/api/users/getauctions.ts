import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client/extension'

const prisma = new PrismaClient()

export default async function getauction(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
