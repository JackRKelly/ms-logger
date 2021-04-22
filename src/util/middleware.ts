import { RequestHandler } from "express";
import { signale } from "../lib/signale";

export const requireTraceId: RequestHandler = async function (req, res, next) {
  if (req.cookies?.traceId) {
    signale.info(`Trade ID: ${req.cookies.tradeId}`);

    return next();
  }

  res
    .status(400)
    .json({ message: "Please include your tracing id with all log posts." });
};
