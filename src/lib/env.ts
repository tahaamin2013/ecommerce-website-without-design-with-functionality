import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string(),
  GOOGLE_CLIENT_ID: zod.string(),
  GOOGLE_CLIENT_SECRET: zod.string(),
  NEXTAUTH_URL: zod.string(),
  NEXTAUTH_SECRET: zod.string(),
});
export const env = envSchema.parse(process.env);