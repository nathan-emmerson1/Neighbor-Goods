import request from 'superagent'
import { Job, JobData } from '@/models/job'

const rootURL = 'api/auction'

export async function getJobs(): Promise<JobData[]> {
  const res = await request.get(rootURL)
  return res.body
}

export async function addJob(newJob: Job) {
  const res = await request.post(rootURL).send(newJob)
}

export async function deleteJob(name: string) {
  await request.delete(`${rootURL}/${name}`)
}

export async function updateJob(name: string, updates: JobData) {
  await request.patch(`${rootURL}/${name}`).send(updates)
}
