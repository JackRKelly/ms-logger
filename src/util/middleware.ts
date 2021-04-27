import { RequestHandler } from "express";
import { signale } from "../lib/signale";
import { getTraceId } from "./";

export const requireTraceId: RequestHandler = async function (req, res, next) {
  if (req.headers.cookie && getTraceId(req.headers.cookie)) {
    return next();
  }

  signale.security("Trace ID not present in making log request.");
  res
    .status(400)
    .json({ message: "Please include your Trace ID with all log posts." });
};
