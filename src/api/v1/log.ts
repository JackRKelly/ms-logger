import { Router } from "express";
import { logStream } from "../..";
import { signale } from "../../lib/signale";
import { requireTraceId } from "../../util/middleware";

export const log = Router();

log.post("/critical", requireTraceId, (req, res) => {
  //TODO: type body when log JSON format is established
  try {
    logStream.writeLog("critical", req.headers.cookie, req.body);
    res.sendStatus(200);
  } catch (error) {
    signale.error(error);
    res.status(500).json({ error });
  }
});

log.post("/error", requireTraceId, (req, res) => {
  try {
    signale.error(`Error Log:`, req.body);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

log.post("/info", requireTraceId, (req, res) => {
  signale.info(`Info Log:`, req.body);
  res.sendStatus(200);
});

log.post("/security", requireTraceId, (req, res) => {
  signale.security(`Security Log:`, req.body);
  res.sendStatus(200);
});

log.post("/warning", requireTraceId, (req, res) => {
  signale.warning(`Warning Log:`, req.body);
  res.sendStatus(200);
});

log.get("/:id", (req, res) => {
  try {
    signale.success(`Get logs for:`, req.params.id);
    res.status(200).send({
      message: "This route is a work in progress, DB needs to be implemented",
    });
  } catch (error) {
    res.sendStatus(500);
  }
});
