export interface JobData {
  tag_id: number
  name: string
  description: string
  compensation: string
  restricted: boolean
  location: number[]
  address: string
}

export interface Job extends JobData {
  id: number
}
