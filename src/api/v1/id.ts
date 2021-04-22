import { Router } from "express";
import { signale } from "../../lib/signale";
import uniqid from "uniqid";
import cookie from "cookie";

export const id = Router();

id.post("/", (req, res) => {
  try {
    let traceId = uniqid("logging_microservice-");
    signale.info(`Trace ID Generated: ${traceId}`);

    if (req.headers.cookie) {
      const cookies = cookie.parse(req.headers.cookie);

      signale.info(cookies);

      if (cookies.traceId) {
        res.status(409).json({
          message: "Unable to generate Trace ID: Trace ID already present.",
        });
      }
    } else {
      res.cookie("traceId", traceId, { maxAge: 900000, httpOnly: true });
      res.sendStatus(200);
    }
  } catch (error) {
    signale.error(error);
    res.sendStatus(500);
  }
});
