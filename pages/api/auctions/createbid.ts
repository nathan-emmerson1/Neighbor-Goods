import { Bid } from '@/models/bid'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '@/auth'
import { PrismaClient } from '@prisma/client/extension'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth()
  if (req.method === 'POST') {
    try {
      const user_id = Number(session?.user?.id)
      if (user_id == undefined) {
        res.status(500)
        throw new Error()
      }

      const newBid: Bid = req.body
      const job = await prisma.job.findUnique({
        where: {
          id: newBid.job_id,
        },
      })

      const userDetails = await prisma.userDetails.findUnique({
        where: {
          user_id: user_id,
        },
      })

      await prisma.Bids.create({
        data: {
          message: newBid.message,
          compensation: newBid.compensation,
          user_id: user_id,
          user: userDetails,
          job_id: newBid.job_id,
          job: job,
          date_posted: newBid.date_posted,
        },
      })
      res.json(newBid)
    } catch (e) {
      console.error(e)
      res.status(500)
    }
  }
}
