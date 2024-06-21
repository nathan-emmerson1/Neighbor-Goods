import { useQuery } from "@tanstack/react-query";
import request from "superagent";

export function useAuctions(pageNum: number) {
  return useQuery({
    queryKey: ["auctions", pageNum],
    queryFn: async () => {
      const data = await request.get("api/jobs/getauctions");
      return data;
    },
  });
}
