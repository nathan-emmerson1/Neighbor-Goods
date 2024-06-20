'use client'
import react from 'react'

import { useSession } from 'next-auth/react'

function ProfilePage() {
  const session = useSession()
  console.log(session.data)

  return (
    <div>
      <div>{session.data?.user?.name}</div>
      <div>{session.data?.user?.email}</div>
      <div>{session.data?.user?.phone}</div>
      <div>{session.data?.user?.location}</div>
    </div>
  )
}
export default ProfilePage
