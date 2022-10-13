import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // delete all data in series , episodes
  prisma.series
    .deleteMany()
    .then((series) => {
      console.log(series);
      res.status(200).json(series);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
