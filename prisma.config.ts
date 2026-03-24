import { defineConfig } from 'prisma/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

function getAdapter() {
  const connectionString = process.env.DATABASE_URL as string;
  const url = new URL(connectionString);
  return new PrismaMariaDb({
    host: url.hostname,
    port: parseInt(url.port || '3306', 10),
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1),
  });
}

export default defineConfig({
  schema: './prisma/schema.prisma',
  // @ts-ignore - datasource.url required for prisma db push in v7
  datasource: {
    url: process.env.DATABASE_URL as string,
  },
});
