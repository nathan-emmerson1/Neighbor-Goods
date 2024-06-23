import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Job, JobData } from '@/models/job'
import { getJobs, addJob, deleteJob, updateJob } from '@/pages/api/clientRoutes'

export default function useAddJob() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (job: Job) => {
      await addJob(job)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
  })
}
