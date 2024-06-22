<<<<<<< HEAD
import React from 'react'
import ProfilePage from './profilepage'
=======
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useIsUser } from "@/hooks/isUser";
>>>>>>> main

export default function Home() {
  const {data: session} = useSession()
  console.log(session)
  return (
<<<<<<< HEAD
    <div>Home
    <ProfilePage />
    </div>
    
  )
=======
    <div>
      {session?.user.name}
      <button
        className="btn btn-primary"
        onClick={() => signIn()}
      >
        Login
      </button>
      <button
        className="btn btn-primary"
        onClick={() => signOut()}
      >
        Logout
      </button>
      <button onClick={() => console.log(useIsUser())}>checkUser</button>
    </div>
  );
>>>>>>> main
}
