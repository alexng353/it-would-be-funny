import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
