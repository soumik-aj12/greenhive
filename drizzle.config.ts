import { defineConfig } from "drizzle-kit";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/schema.ts",
  out: "./server",
  dbCredentials: {
    url: `${process.env.DATABASE_URL}`
  },
});