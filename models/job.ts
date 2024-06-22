export interface JobData {
  user_id?: number
  name: string
  description: string
  compensation: string
  restricted: boolean
  location: string
  address: string
  is_auction: boolean
  start_date: Date
  end_date: Date
}

export interface Job extends JobData {
  id: number
}
