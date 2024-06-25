import { useQueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import request from 'superagent'
import { UserDetails } from '../models/userDetails'

export function useAddUser(userDetails: UserDetails) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      await request
        .post(`http://localhost:3000/users/createdetails`)
        .send(userDetails)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries()
    },
  })
}
