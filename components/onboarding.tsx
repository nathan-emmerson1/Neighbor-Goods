import { useState } from "react";

export default function Onboarding() {
    const [userDetails, setUserDetails] = useState({
        age: '',
        phone: '',
        location: '',
    })

    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = () => {
        setUserDetails({
            age,
            phone,
            location,
        })
    }

    return (
        <>
      <h2 className="card-title title-center">Where is your NeighbourGood?</h2>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 3.293l-6 6V14.5A1.5 1.5 0 0 0 3.5 16h9A1.5 1.5 0 0 0 14 14.5v-5.207l-6-6zM7 13V9h2v4H7zm1-10.586l-6.707 6.707A1 1 0 0 1 1 8.793V14.5A2.5 2.5 0 0 0 3.5 17h9a2.5 2.5 0 0 0 2.5-2.5V8.793a1 1 0 0 1-.293-.707L9 2.414A1 1 0 0 0 8 2.414z" />
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="Type here"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>

      <h2 className="card-title title-center">What`s your phone number?</h2>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 3.293l-6 6V14.5A1.5 1.5 0 0 0 3.5 16h9A1.5 1.5 0 0 0 14 14.5v-5.207l-6-6zM7 13V9h2v4H7zm1-10.586l-6.707 6.707A1 1 0 0 1 1 8.793V14.5A2.5 2.5 0 0 0 3.5 17h9a2.5 2.5 0 0 0 2.5-2.5V8.793a1 1 0 0 1-.293-.707L9 2.414A1 1 0 0 0 8 2.414z" />
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="Type here"
          value={location}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <h2 className="card-title title-center">When were you born?</h2>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 3.293l-6 6V14.5A1.5 1.5 0 0 0 3.5 16h9A1.5 1.5 0 0 0 14 14.5v-5.207l-6-6zM7 13V9h2v4H7zm1-10.586l-6.707 6.707A1 1 0 0 1 1 8.793V14.5A2.5 2.5 0 0 0 3.5 17h9a2.5 2.5 0 0 0 2.5-2.5V8.793a1 1 0 0 1-.293-.707L9 2.414A1 1 0 0 0 8 2.414z" />
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="Type here"
          value={location}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>

      
    </>
    )
}