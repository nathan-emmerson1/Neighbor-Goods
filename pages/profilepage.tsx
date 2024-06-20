'use client'
import react from 'react'

import { useSession } from 'next-auth/react'
import { userAgent } from 'next/server'
import { UserData } from '@/models/user'

const user: UserData = {
  name: 'johnny',
  age: 26,
  email: 'johnnyy0889@gmail.com',
  phone: '0223634747',
  location: 'where is there'
}

function ProfilePage() {
  const session = useSession()
  console.log(session.data?.user?.name)

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  )
}
export default ProfilePage
