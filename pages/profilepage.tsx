'use client'
import react from 'react'

import { useSession } from 'next-auth/react'

function ProfilePage() {
  const session = useSession()
  console.log(session.data)

  return (
    <div>
    <div></div>
    <div></div>
    <div></div>
    
    </div>
    

v
 
       
  )
}
export default ProfilePage
{/* <div>
    <div classNameName="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
    </div>
      <div>{session.data?.user?.name}</div>
      <div>{session.data?.user?.email}</div>
      
      
    </div> */}