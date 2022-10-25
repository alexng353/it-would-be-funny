import React from "react";
import { PrismaClient } from "@prisma/client";
import Card from "../../components/card";
const prisma = new PrismaClient();

export async function getStaticProps() {
  const shows = await prisma.series.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      image: true,
      episodes: {
        select: {
          id: true,
          title: true,
          slug: true,
        },
      },
    },
  });

  return {
    props: {
      shows,
    },

    // Re-generate the page at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default function AllShows(context: any) {
  return (
    <div>
      <h1>All Shows</h1>
      {/* {JSON.stringify(context.shows)} */}
      {context.shows.map((show: any, index: any) => {
        return (
          <div key={index}>
            <Card {...show} />
          </div>
        );
      })}
    </div>
  );
}
