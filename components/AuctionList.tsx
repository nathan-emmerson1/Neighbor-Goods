/* eslint-disable @next/next/no-img-element */
'use client'
import { useAuctions } from '@/hooks/fetchAuctions'

interface Props {
  pageNum: number
}

export default function AuctionList(props: Props) {
  const { data: auctions, isPending, isError } = useAuctions(props.pageNum)

  if (isPending) {
    return <p>Loading state</p>
  }

  if (isError) {
    return <p>Encountered error</p>
  }

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: 'url(/images/hood.jpg' }}
    >
      <div className="grid grid-cols-3 gap-4 px-10 mb-10">
        {auctions?.map((auction) => (
          <div
            key={auction.name}
            className="card w-96 bg-[rgba(80,163,204,0.75)] shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img src="https://5.imimg.com/data5/WS/LU/MY-39504911/mens-woolen-sweater.jpg" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{auction.name}</h2>
              <p>{auction.description}</p>
              <h3 className="card-title">
                Compensation: {auction.compensation}
              </h3>
              <ul>
                <li>
                  <strong>Restricted Auction:</strong>{' '}
                  {auction.restricted ? 'Yes' : 'No'}
                </li>
                <li>
                  <strong>Address:</strong> {auction.address}
                </li>
                <li>
                  <strong>Start Date:</strong>{' '}
                  {auction?.start_date
                    ? new Date(auction.start_date).toLocaleDateString()
                    : 'N/A'}
                </li>
                <li>
                  <strong>End Date:</strong>
                  {auction?.start_date
                    ? new Date(auction.start_date).toLocaleDateString()
                    : 'N/A'}
                </li>
              </ul>
              <div className="card-actions">
                <button className="btn btn-primary">Place Bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
