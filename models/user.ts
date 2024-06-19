export interface UserData {
  name: string
  age: number
  email: string
  phone: string
  location: number[]
}

export interface User extends UserData {
  id: number
}
