import { useRouter } from "next/router";
import React from 'react'
import { useSession } from 'next-auth/react'


export default function Home() {
    const router = useRouter()
    const session = useSession()

    const handleStart = () => {
        router.push('/signup') //placeholder
    }

    const handleAuth = () => {
        if (session.data?.user) {
            router.push('/api/auth/signout')
        } else {
            router.push(('/api/auth/signin'))
        }
    }

    return (
        <>
        
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/images/background-image.png'}}>
       
        <div className="absolute top-0 right-0 m-4 flex space-x-4">{session.data?.user?.name}<button className='btn glass' onClick={handleAuth}>{session?.data?.user ? 'Logout' : 'Login'}</button>
        </div>

            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">NeighbourGoods</h1>
                    <p className="mb-5">Discover the power of a connected neighborhood! Share skills, find local jobs within your community. It's time to build a stronger, more supportive network together.
                    <br></br>
                    <br></br>
                    Sign Up Now and Make a Difference!</p>
                    <button className="btn btn-primary" onClick={handleStart}>Start here</button>
                </div>
            </div>
        </div>
        
        </>
    )

}