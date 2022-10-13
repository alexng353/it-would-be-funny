import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //   prisma.episode
  //     .findMany()
  //     .then((series) => {
  //       console.log(series);
  //       res.status(200).json(series);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  prisma.series
    .findMany({
      include: {
        episodes: true,
      },
    })
    .then((series) => {
      console.log(series);
      res.status(200).json(series);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
