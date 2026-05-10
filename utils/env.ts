import dotenv from "dotenv";

dotenv.config();

type EnvConfig = {
  BASE_URL: string;
  HEADLESS: boolean;
  RETRIES: number;
  TIMEOUT: number;
};

export const env: EnvConfig = {
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  HEADLESS: process.env.HEADLESS === "true",
  RETRIES: process.env.RETRIES ? Number(process.env.RETRIES) : 0,
  TIMEOUT: process.env.TIMEOUT ? Number(process.env.TIMEOUT) : 30000,
};
