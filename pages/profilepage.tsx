'use client'


import { useQuery } from '@tanstack/react-query'
import react from 'react'

// This is userData
const user = {
id: 1,
name: 'mrs jaming',
age: 23,
email: 'johnny@gmail.com',
phone: '0238849459',
location: 'jump around',
img: 'www.getimage.com.WebP',

}

function ProfilePage() {
  // Query need to be hook up to api
  // const {data, isPending, isError} = useQuery({
  //   queryKey: ['user'],
  //   queryFn: () => fetchUserById(id),
    
  // })
  // if(isPending) return <p>Loading...</p>
  // if(isError) return <p>There was a error</p>
  // console.log(user)
  // useing all user data
  return (
       <div>
 <p>{user.img}</p>
 <p>{user.name}</p>
 <p>{user.email}</p>
 <p>{user.phone}</p>
 <p>{user.location}</p>
 </div>
    
  )

}
export default ProfilePage



