import { Job } from '@/models/job'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '@/auth'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth()
  if (req.method === 'POST') {
    try {
      const userId = session?.user?.id
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
        },
      })
      res.json(newJob)
    } catch (e) {
      console.error(e)
      res.status(500)
    }
  }
}
