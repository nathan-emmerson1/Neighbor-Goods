/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { JobData } from '@/models/job'
import { useRouter } from 'next/router'
import AuctionList from '@/components/AuctionList'
import AuctionBid from '@/components/auctionBid'
import { useJobById } from '@/hooks/fetchJobs'

export default function Auctions() {
  const router = useRouter()

  const param = router.query.id

  const id = Number(param)

  console.log(id)

  const { data, isPending, isError } = useJobById(id)

  if (isError) {
    return <p>is error</p>
  }

  if (isPending) {
    return <p>loading...</p>
  }

  return (
    <>
      <AuctionBid {...data} />
    </>
  )
}
