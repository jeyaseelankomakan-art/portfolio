import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  // @ts-ignore - datasource.url required for prisma db push in v7
  datasource: {
    url: process.env.DATABASE_URL as string,
  },
});
