import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")

  const signUpWithGoogle = () => {
    // Google sign up logic here
  };

  const signUpWithEmail = () => {
    // What's the go with no passwords??
  };

  // do we want sign up with facebook? old peoiple use facebook

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/images/background-image.png" }}
      >
        <div className="hero-overlay bg-black bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title title-center">Create an Account</h2>
                <form>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </label>

                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </label>
                </form>
                <button className="btn btn-primary">Sign up</button>
                <button className="btn" onClick={signUpWithGoogle}>
                  Sign in with Google
                </button>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
