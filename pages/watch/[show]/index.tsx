import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStaticPaths() {
  const shows = await prisma.series.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });
}

export async function getStaticProps() {
  const shows = await prisma.series.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
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

export default function Watch() {
  return (
    <div>
      <h1>Watch</h1>
    </div>
  );
}
