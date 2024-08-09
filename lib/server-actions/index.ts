"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postSubmission = async (data: any) => {
  await prisma.formSubmission.create({ data: data });
};

export const getSubmissions = async () => {
  const submissions = await prisma.formSubmission.findMany();
  return submissions;
};
