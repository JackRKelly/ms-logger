import express from "express";
import signale from "signale";
import { env } from "./lib/env";

const isProd = env.NodeEnv === "production" || env.NodeEnv !== "development";

signale.info(
  `App is bootstrapping in ${isProd ? "production" : "development"}`
);

(async () => {
  const { api: v1 } = await import("./api/v1");

  const app = express();

  app.use(express.json());

  app.use("/api/v1", v1);

  app.listen(8888, () => {
    signale.success(`[Logger Microservice] Launched on port 8888`);
  });
})();
