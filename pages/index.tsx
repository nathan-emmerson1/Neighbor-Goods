import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useIsUser } from "@/hooks/isUser";

export default function Home() {
  const session = useSession()
  return (
    <div>
      {session.data?.user?.name}
      {session.data?.user?.id}
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
}
