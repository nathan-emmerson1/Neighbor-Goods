import { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(req: Req, res: Res) {
  if (req.method === "GET") {
    try {
      const currentSession = useSession()
      const id: string = currentSession.data?.user?.id || ''
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
