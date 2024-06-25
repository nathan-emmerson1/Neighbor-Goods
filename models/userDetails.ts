import { DateTime } from 'next-auth/providers/kakao'

export interface UserDetails {
  user_id?: string
  age: string
  phone: string
  location: string
}

export interface UserDetailsData extends UserDetails {
  id: number
}
