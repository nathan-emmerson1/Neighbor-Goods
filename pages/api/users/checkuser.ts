import { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: Req, res: Res) {
  if (req.method === "POST") {
    try {
      const session = await auth(req, res)
      const id: string = session?.user.id || ''
      const userDetail = await prisma.userDetails.findUnique({
        where: {
          user_id: id 
        }
      })
      const isUser: boolean = (userDetail != undefined)
      res.status(200).json(isUser)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  }
}
