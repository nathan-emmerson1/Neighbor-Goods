import { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from '@prisma/client'
import { Job } from '@/models/job'

const prisma = new PrismaClient()

export default async function handler(req: Req, res: Res) {
  if (req.method === 'GET') {
    try {
      const id: number = Number(req.query.id)
      const jobData = await prisma.jobs.findUnique({
        where: {
          id: id
        }
      })
      if (jobData === null) {
        res.status(401).json('couldnt find user')
        throw new Error
      }
      const job: Job = jobData
      res.status(200).json(job)
    } catch (error) {
      res.status(500).json('interal server error')
    }
  }
}
