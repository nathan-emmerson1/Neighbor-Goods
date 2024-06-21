export interface JobData {
  tag_id: number
  name: string
  description: string
  compensation: string
  restricted: boolean
  location: string
  address: string
  isAuction: boolean
}

export interface Job extends JobData {
  id: number
}
