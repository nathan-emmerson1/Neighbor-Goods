import React from 'react'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()
  return (
    <div>{session.data?.user?.name}<button className='btn btn-primary'>test</button></div>
  )
}

