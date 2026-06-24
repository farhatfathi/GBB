import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/index.js";
import dotenv from "dotenv";

dotenv.config();

const queryClient = postgres(process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/gbb");

export const db = drizzle(queryClient, { schema });
