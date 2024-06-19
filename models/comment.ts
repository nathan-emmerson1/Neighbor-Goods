export interface CommentData {
  job_id: number
  title: string
  description: string
}

export interface Comment extends CommentData {
  id: number
}
