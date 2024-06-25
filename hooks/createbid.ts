import { useQueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import request from 'superagent'
import { Bid } from '@/models/bid'

export function useAddBid() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['newBid'],
    mutationFn: async (newBid: Bid) => {
      await request
        .post(`http://localhost:3000/auctions/createbid`)
        .send(newBid)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['newBid'] })
    },
  })
}
