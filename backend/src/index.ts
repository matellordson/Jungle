import { Hono } from "hono";
import { Product } from "./routes/product";

const app = new Hono();

app
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .route("/product", Product);

export default app;
