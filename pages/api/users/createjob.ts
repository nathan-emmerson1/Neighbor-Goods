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
      prisma.jobs.create({
        data: {
          name: newJob.name,
          description: newJob.description,
          compensation: newJob.compensation,
          restricted: newJob.restricted,
          location: newJob.location,
        },
      })
    } catch (e) {}
  }
}
