'use client'
import { useAuctions } from "@/hooks/fetchAuctions"

export default function AuctionList(pageNum: number) {
  const { data: auctions, isPending, isError } = useAuctions(pageNum)

  if (isPending) {
    return <p>Loading state</p>
  }

  if (isError) {
    return <p>Incountered erro</p>
  }

  return (
    <div>
      <ul>
        {auctions?.map(auction => <li key={auction.id}>{auction.name}</li>)}
      </ul>
    </div>
  )
}
