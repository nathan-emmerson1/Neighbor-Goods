'use client'
import { useJobById } from '@/hooks/fetchJobs'
import { useRouter } from 'next/router'

export default function Job() {
  const router = useRouter()

  const param = router.query.id

  const id = Number(param)

  console.log(id)

  const { data, isPending, isError } = useJobById(id)

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{data?.name}</h1>
            <p className="py-6">{data?.description}</p>
            <h3 className="card-title">Compensation: {data?.compensation}</h3>
            <ul>
              <li>
                <strong>Restricted Auction:</strong>{' '}
                {data?.restricted ? 'Yes' : 'No'}
              </li>
              <li>
                <strong>Address:</strong> {data?.address}
              </li>
              <li>
                <strong>Start Date:</strong> {data.start_date}
              </li>
              <li>
                <strong>Auction Length:</strong> {data.end_date}
              </li>
            </ul>
            <button className="btn btn-primary my-5">Bid Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
