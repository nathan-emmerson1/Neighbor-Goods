/* eslint-disable @next/next/no-img-element */
'use client'
import { useAuctions } from '@/hooks/fetchAuctions'
import { JobData } from '@/models/job'

interface Props {
  pageNum: number
}

const test: JobData = {
  user_id: 1,
  name: 'Knit a jersey',
  description: 'After a woolen sweater knitted out of merino wool',
  compensation: '$150',
  restricted: false,
  location: 'Wellington',
  address: '88 Boulcott Street',
  is_auction: true,
  start_date: new Date('2024-07-01T00:00:00Z'),
  end_date: new Date('2024-07-31T23:59:59Z'),
}

export default function AuctionList(props: Props) {
  // const { data: auctions, isPending, isError } = useAuctions(props.pageNum)

  // if (isPending) {
  //   return <p>Loading state</p>
  // }

  // if (isError) {
  //   return <p>Encountered error</p>
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="hero flex items-center justify-center py-16 mt-3
        "
        style={{ backgroundImage: 'url(/images/hood.jpg)' }}
      >
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Auctions from <span className="text-neutral">NZs #1</span>{' '}
            Community platform.
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 px-10 m-10">
        {/* {auctions?.map((auction) => ( */}
        <div
          key={test.name}
          className="card w-96 bg-[rgba(80,163,204,0.75)] shadow-xl"
        >
          <figure className="px-10 pt-10">
            <img src="https://5.imimg.com/data5/WS/LU/MY-39504911/mens-woolen-sweater.jpg" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{test.name}</h2>
            <p>{test.description}</p>
            <h3 className="card-title">Compensation: {test.compensation}</h3>
            <ul>
              <li>
                <strong>Restricted Auction:</strong>{' '}
                {test.restricted ? 'Yes' : 'No'}
              </li>
              <li>
                <strong>Address:</strong> {test.address}
              </li>
              <li>
                <strong>Start Date:</strong>{' '}
                {test?.start_date
                  ? new Date(test.start_date).toLocaleDateString()
                  : 'N/A'}
              </li>
              <li>
                <strong>End Date:</strong>
                {test?.start_date
                  ? new Date(test.start_date).toLocaleDateString()
                  : 'N/A'}
              </li>
            </ul>
            <div className="card-actions">
              <button className="btn btn-primary">Place Bid</button>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  )
}
