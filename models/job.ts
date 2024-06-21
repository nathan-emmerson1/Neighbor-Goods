export interface JobData {
  name: string
  description: string
  compensation: string
  restricted: boolean
  location: string
  address: string
  is_auction: boolean
  start_date: Date
  end_date: Date
  userId: number
}

export interface Job extends JobData {
  id: number
}
