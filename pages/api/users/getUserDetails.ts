import { NextApiRequest, NextApiResponse } from "next";
import { UserDetails } from "../../../models/userDetails";
import { auth } from "../../../auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getCurrentUser(): Promise<UserDetails | null> {
  const session = await auth();
  if (!session?.user) return null;
  const currentUser: UserDetails | null = await prisma.userDetails.findFirst({
    where: {
      user_id: session.user.id,
    },
  });

  return currentUser;
}
