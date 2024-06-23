import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Job } from '@/models/job'

export function useAuctions(pageNum: number) {
  return useQuery({
    queryKey: ['auctions', pageNum],
    queryFn: async () => {
      const data = await request.get(
        `http://localhost:3000/api/auctions/${pageNum}`
      )
      return data.body as Job[]
    },
  })
}
