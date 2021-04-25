import { RequestHandler } from "express";
import { signale } from "../lib/signale";
import cookie from "cookie";

export const requireTraceId: RequestHandler = async function (req, res, next) {
  if (req.headers.cookie) {
    let cookies = cookie.parse(req.headers.cookie);

    if (cookies.traceId) {
      signale.info(`Trace ID is present: ${cookies.traceId}`);

      return next();
    }
  }

  signale.security("Trace ID not present in making log request.");
  res
    .status(400)
    .json({ message: "Please include your Trace ID with all log posts." });
};
