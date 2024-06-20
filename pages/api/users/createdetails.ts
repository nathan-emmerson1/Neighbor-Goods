import { UserDetails } from "@/models/userDetails";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const session = await auth()
  if (req.method == 'POST') {
    try {
      const userId = session?.user?.id
      const userDetails: UserDetails = req.body
      userDetails.user_id = userId
      res.json(userDetails)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  }
}
