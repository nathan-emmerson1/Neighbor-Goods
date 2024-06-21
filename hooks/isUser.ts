import request from "superagent"

export async function useIsUser() {
  const req = await request('/api/users/checkuser')
  const isUser: boolean = req.body
  return isUser
}
