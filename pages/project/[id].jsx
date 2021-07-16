import React from "react";
import DBClient from "../../db/prisma";
import Link from "next/link";

function Project({ project }) {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <p> {project.name}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const prisma = DBClient.getInstance().prisma;
  const project = await prisma.project.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const prisma = DBClient.getInstance().prisma;
  const ids = await prisma.project.findMany({
    where: {
      visible: true,
    },
    select: {
      id: true,
    },
  });

  const paths = ids.map((x) => ({
    params: { id: x.id.toString() },
  }));
  return { paths, fallback: false };
}

export default Project;
