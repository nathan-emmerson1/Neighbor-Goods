import { useQuery } from "@tanstack/react-query";
import request from "superagent";
export default function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      await request.get("/api/users/getuser").send("authid");
    },
  });
}
