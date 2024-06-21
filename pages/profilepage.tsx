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
   <div className=" mt-40 relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-white w-full  shadow-lg rounded-xl ">
    <div className="px-6 ">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className="relative">
                    <img src="https://www.creativefabrica.com/wp-content/uploads/2022/11/19/3D-Portrait-Of-Bart-Simpson-47427653-1.png" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                </div>
            </div>
            <div className="w-full text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                        <span className="text-sm text-slate-400">Reviews</span>
                    </div>
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                        <span className="text-sm text-slate-400">Karma Points</span>
                    </div>

                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                        <span className="text-sm text-slate-400">Reviewed</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Bart</h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Tauranga
            </div>
        </div>
        <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                    <p className="font-light leading-relaxed text-slate-600 mb-4">i want to learn how to play guiter</p>
                    <a href="javascript:;" className="font-normal text-slate-700 hover:text-slate-400">Edit Profile</a>
                    <a href='javascript' className=' ml-4 font-normal text-slate-700 hover:text-slate-400'>Contact</a>
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
