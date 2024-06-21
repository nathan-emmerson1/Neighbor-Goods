import { useQuery } from "@tanstack/react-query";
import request from "superagent";

export function useJobs(pageNum: number) {
  return useQuery({
    queryKey: ["auctions", pageNum],
    queryFn: async () => {
      const data = await request.get(`api/auctions/${pageNum}`);
      return data;
    },
  });
}
