import { Hono } from "hono";
import { sql } from "../../client/neon";

export const Product = new Hono().get("", async (c) => {
  const data = await sql`SELECT * FROM product`;
  return c.json({ data });
});
