import { PrismaClient } from "@prisma/client";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
export * from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();

export { PrismaClient as PrismaClientSingleton };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;