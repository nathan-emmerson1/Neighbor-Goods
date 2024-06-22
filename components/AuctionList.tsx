'use client'
import { useAuctions } from "@/hooks/fetchAuctions"

interface Props {
  pageNum: number
}

export default function AuctionList(props: Props) {
  const { data: auctions, isPending, isError } = useAuctions(props.pageNum)

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
