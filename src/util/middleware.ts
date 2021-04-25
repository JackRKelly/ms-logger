import { RequestHandler } from "express";
import { signale } from "../lib/signale";
import { getTraceId } from "./";

export const requireTraceId: RequestHandler = async function (req, res, next) {
  let traceId: string | undefined;

  if (req.headers.cookie) {
    traceId = getTraceId(req.headers.cookie);
  }

  if (traceId) {
    signale.info(`Trace ID is present: ${traceId}`);

    return next();
  }

  signale.security("Trace ID not present in making log request.");
  res
    .status(400)
    .json({ message: "Please include your Trace ID with all log posts." });
};
