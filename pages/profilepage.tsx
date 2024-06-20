'use client'
import react from 'react'

import { useSession } from 'next-auth/react'

function ProfilePage() {
  const session = useSession()
  console.log(session.data)

  return (
    <div>
      <div>profilepage</div>
      <div></div>
      <div></div>
    </div>
  )
}
export default ProfilePage
