/* eslint-disable @next/next/no-img-element */
'use client'
import { useAuctions } from '@/hooks/fetchAuctions'
import { useState } from 'react'
import { Job } from '@/models/job'
import { useRouter } from 'next/router'
import { useAddBid } from '@/hooks/createbid'

export default function AuctionBid(job: Job) {
  const router = useRouter()
  const [bid, setBid] = useState({
    id: 0,
    message: '',
    compensation: '',
    user_id: 0,
    job_id: job.id,
    date_posted: new Date(),
  })

  const [message, setMessage] = useState('')
  const [comp, setComp] = useState('')
  const { mutate: postBid } = useAddBid()

  const handleSubmit = async () => {
    setBid({
      id: 0,
      message: message,
      compensation: comp,
      user_id: 0,
      job_id: job.id,
      date_posted: new Date(),
    })
    postBid(bid)
    router.push('/auctions')
  }

  return (
    <>
      <input
        type="text"
        className=""
        placeholder="Add a message here!"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <input
        type="text"
        className=""
        placeholder="Make an offer!"
        value={comp}
        onChange={(e) => setComp(e.target.value)}
        required
      />
      <button onClick={handleSubmit}></button>
    </>
  )
}
