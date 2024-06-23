'use client'
import react from 'react'
// import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { userAgent } from 'next/server'
import { UserDetails } from '@/models/userDetails'

// const user: UserDetails = {
//   name: 'Johnny',
//   age: 26,
//   email: 'johnnyy0889@gmail.com',
//   phone: '0223634747',
// }

function ProfilePage() {
  const session = useSession()

  console.log(session.data?.user)

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            href="http://localhost:3000/home"
            className="btn btn-ghost text-xl"
          >
            Neighbours Goods
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={session.data?.user?.image} alt="userprofilepicture" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="http://localhost:3000/home">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
                    src={session.data?.user?.image}
                    alt={session.data?.user?.image}
                    className=" border-solid border-4 border-secondary shadow-xl rounded-full align-middle absolute -m-16 -ml-17 lg:-ml-14 max-w-[150px] "
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
                  <a
                    href="http://localhost:3000/editprofile"
                    className="btn btn-primary  font-normal"
                  >
                    Edit Profile
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    className=" bg-primary ml-4 font-normal btn btn-primary"
                  >
                    Contact
                  </a>
                </div>
              </div>
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
