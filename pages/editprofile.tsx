'use client'
import react from 'react'
import { useSession } from 'next-auth/react'

function EditProfile() {
  // will need to add useState variables
  // useMutation for the forms to edit profile
  // import/make hooks
  
  const session = useSession()
  console.log(session.data?.user)

  return (
    <div className="hero min-h-screen"
        style={{ backgroundImage: 'url(/images/background-image.png' }} >
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />

      
      

      <div className="bg-white flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] ">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className=" sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Edit Profile</h2>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full"
            >
              Profile
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Account Settings
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Notifications
            </a>
            
          </div>
        </aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">
               Profile
              </h2>
              <div className=" grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="border-solid border-4 border-secondary object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={session.data?.user.image}
                    alt="Bordered avatar"
                  />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button
                      type="button"
                      className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-primary rounded-lg border border-indigo-200 focus:z-10 focus:ring-4 focus:ring-indigo-200"
                    >
                      Change picture
                    </button>
                    <button
                      type="button"
                      className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-primary rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
                    >
                      Delete picture
                    </button>
                  </div>
                </div>
                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Profile Name
                      </label>
                      <div className='text-slate-white'>{session.data?.user?.name}
                      </div>
                    </div>
                    
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Email
                    </label>
                    <div className='text-slate-white'>{session.data?.user.email}</div>
                  </div>
                  
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Bio
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your bio here..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="text-white bg-primary  focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
    
  )
}
export default EditProfile
