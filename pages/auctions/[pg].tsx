/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { JobData } from '@/models/job'
import { useRouter } from 'next/router'
import AuctionList from '@/components/AuctionList'

export default function Auctions() {
  const router = useRouter()

  const param = router.query.pg || 0

  const pageNum = Number(param)

  console.log(pageNum)

  return (
    <>
      <AuctionList pageNum={pageNum} />
    </>
  )
}
