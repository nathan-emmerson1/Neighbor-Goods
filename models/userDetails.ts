export interface UserDetails {
  user_id?: String
  age: number
  phone: string
  Location: string
}

export interface UserDetailsData extends UserDetails {
  id: number
}
