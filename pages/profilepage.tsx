'use client'
import react from 'react'

import { useSession } from 'next-auth/react'
import { userAgent } from 'next/server'
import { UserData } from '@/models/user'

const user: UserData = {
  name: 'Johnny',
  age: 26,
  email: 'johnnyy0889@gmail.com',
  phone: '0223634747',
}

function ProfilePage() {
  const session = useSession()
  console.log(session.data?.user?.name)

  return (
    <div className="hero min-h-screen">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
            {/* <h1 className="mb-5 text-5xl font-bold">{user.name}</h1> */}
            <div className="avatar">
              <div className="w-24 rounded-full pt-4">
                <img src="https://live.staticflickr.com/5323/9200266730_77b9a04c58_c.jpg" />
                {/* <h1 className="mb-5 text-5xl font-bold">{user.name}</h1> */}
              </div>
              <h1 className="mt-8 text-3xl font-bold ">{user.name}</h1>
            </div>
            <div className=' className="card w-96 bg-base-100 shadow-xl rouded-xl">'>
              <div className="mb-5 ">{user.email}</div>
              <div className="mb-5 pb-1">{user.phone}</div>
              <button className="btn btn-primary">Edit Profile</button>
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage
{
  /* <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>this a test</div> */
}

// relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16
