export interface BidData {
  message: string
  compensation: string
  user_id: number
  job_id: number
  date_posted: Date
}

export interface Bid extends BidData {
  id: number
}
