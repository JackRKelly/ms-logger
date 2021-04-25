import express from "express";
import { signale } from "./lib/signale";
import { env } from "./lib/env";
import { LogStream } from "./lib/stream";

signale.info(`App is bootstrapping in ${env.NodeEnv}`);

export const logStream = new LogStream();

(async () => {
  const { api: v1 } = await import("./api/v1");

  const app = express();

  app.use(express.json());

  app.use("/api/v1", v1);

  app.listen(env.Port, () => {
    signale.success(`App launched on port ${env.Port}`);
  });
})();
