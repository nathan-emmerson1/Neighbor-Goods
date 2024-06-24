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
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: 'url(/images/hood.jpg' }}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="hero bg-[rgba(80,163,204,0.75)] rounded-lg shadow-xl backdrop-blur-[4.3px] border border-[rgba(80,163,204,0.54)] p-6 w-full max-w-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://5.imimg.com/data5/WS/LU/MY-39504911/mens-woolen-sweater.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{data?.name}</h1>
                <p className="py-6">{data?.description}</p>
                <h3 className="card-title">
                  Compensation: {data?.compensation}
                </h3>
                <ul>
                  <li>
                    <strong>Restricted Auction:</strong>{' '}
                    {data?.restricted ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <strong>Start Date:</strong>{' '}
                    {data?.start_date
                      ? new Date(data.start_date).toLocaleDateString()
                      : 'N/A'}
                  </li>
                  <li>
                    <strong>End Date:</strong>{' '}
                    {data?.end_date
                      ? new Date(data.end_date).toLocaleDateString()
                      : 'N/A'}
                  </li>
                </ul>
                <button className="btn btn-primary my-5">Bid Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
