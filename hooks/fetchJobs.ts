import { Job } from "@/models/job";
import { useQuery } from "@tanstack/react-query";
import request from "superagent";

export function useJobs(pageNum: number) {
  return useQuery({
    queryKey: ["jobs", pageNum],
    queryFn: async (): Promise<Job[]> => {
      const data = await request.get(`api/jobs/${pageNum}`)
      return data.body
    },
  });
}

export function useJobById(id: number) {
  return useQuery({
    queryKey: ['job', id],
    queryFn: async (): Promise<Job> => {
      const data = await request.get(`api/job/${id}`)
      return data.body
    }
  })
}
