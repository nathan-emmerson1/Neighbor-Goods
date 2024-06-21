
import { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: Req, res: Res) {
  if (req.method === "GET") {
    try {
      const pageNum: number = Number(req.query.pg) || 0
      const pageAmount: number = 10;
      const skip: number = pageNum * pageAmount
      const auction = await prisma.jobs.findMany({
        take: pageAmount,
        skip: skip,
        where: {
          is_auction: true,
        },
      });
      res.status(200).json(auction);
    } catch (e) {
      console.error(e);
      res.status(500);
    }
  }
}
