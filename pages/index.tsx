import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  return (
    <div>
      {session.data?.user?.name}
      <button
        className="btn btn-primary"
        onClick={() => router.push("/api/auth/signin")}
      >
        Login
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/api/auth/signout")}
      >
        Logout
      </button>
    </div>
  );
}
