import { PrismaClient } from '@prisma/client';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaGlobal = prisma;