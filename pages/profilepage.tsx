/* eslint-disable @next/next/no-img-element */
'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

function ProfilePage() {
  const session = useSession()
  const userImage = String(session.data?.user.image)

  console.log(session.data?.user)

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: 'url(/images/background-image.png' }}
    >
      <div className=" border-solid border-4 border-secondary mt-34 relative max-w-md mx-auto md:max-w-1xl  min-w-0 break-words bg-white w-full  shadow-lg rounded-xl ">
        <div className="px-6 ">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={userImage}
                  alt={userImage}
                  className=" border-solid border-4 border-secondary shadow-xl rounded-full align-middle absolute -m-16 -ml-17 lg:-ml-14 max-w-[150px]"
                />
              </div>
            </div>
            <div className="border-solid border-4 border-secondary w-full  text-center mt-20 mb-10">
              <div className="flex justify-center lg:pt-4 pt-3 pb-3">
                <div className="p-3 text-center p ">
                  <span className=" text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3,360
                  </span>
                  <span className="text-sm text-slate-400">Reviews</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    2,454
                  </span>
                  <span className="text-sm text-slate-400">Karma Points</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    564
                  </span>
                  <span className="text-sm text-slate-400">Reviewed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 py-2 border-t border-accent text-center"></div>
          <div className="  text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-4">
              {session.data?.user?.name}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className=" fa-map-marker-alt mr-2  opacity-75 text-slate-primary "></i>
              Email:{session.data?.user?.email}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-accent text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  i want to learn how to play guiter
                </p>
                <Link
                  href="/editprofile"
                  className="btn btn-primary  font-normal"
                >
                  Edit Profile
                </Link>
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className=" bg-primary ml-4 font-normal btn btn-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage
