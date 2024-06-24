import { Job } from '@/models/job'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '@/auth'
import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth()
  if (req.method === 'POST') {
    try {
      const userId = session?.user?.id
      const detailsId = Number(getUserId())
      if (detailsId == undefined) {
        res.status(500)
        throw new Error()
      }
      if (userId == undefined) {
        res.status(500)
        throw new Error()
      }
      const newJob: Job = req.body
      await prisma.jobs.create({
        data: {
          name: newJob.name,
          description: newJob.description,
          compensation: newJob.compensation,
          restricted: newJob.restricted,
          location: newJob.location,
          address: newJob.address,
          is_auction: newJob.is_auction,
          start_date: newJob.start_date,
          end_date: newJob.end_date,
          user_id: detailsId,
        },
      })
      res.json(newJob)
    } catch (e) {
      console.error(e)
      res.status(500)
    }
  }
}

async function getUserId(): Promise<number | undefined> {
  const session = await auth()
  const userId = session?.user?.id

  const detailsId = await prisma.userDetails.findUnique({
    where: {
      user_id: userId,
    },
  })

  return Number(detailsId?.id)
}
