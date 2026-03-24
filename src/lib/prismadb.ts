import { PrismaClient } from '../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

function getPrismaClient() {
  const url = new URL(process.env.DATABASE_URL as string);
  const adapter = new PrismaMariaDb({
    host: url.hostname,
    port: parseInt(url.port || '3306', 10),
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1),
  });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma || getPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
