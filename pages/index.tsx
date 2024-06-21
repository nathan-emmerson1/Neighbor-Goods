import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div>
      {session.data?.user?.name}
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
    </div>
  );
}
