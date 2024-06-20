import { UserDetails } from "@/models/userDetails";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const session = await auth()
  if (req.method == 'POST') {
    try {
      const userId = session?.user?.id
      if (userId == undefined) {
        res.status(500)
        throw new Error
      }
      const userDetails: UserDetails = req.body
      prisma.userDetails.create({
        data: {
          user_id: userId,
          age: userDetails.age,
          phone: userDetails.phone,
          location: userDetails.location,
        } 
      })
      res.json(userDetails)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  }
}
