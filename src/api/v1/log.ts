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
    res.status(500).json({ error });
  }
});

log.post("/error", requireTraceId, (req, res) => {
  try {
    logStream.writeLog("error", req.headers.cookie, req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error });
  }
});

log.post("/info", requireTraceId, (req, res) => {
  try {
    logStream.writeLog("info", req.headers.cookie, req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error });
  }
});

log.post("/security", requireTraceId, (req, res) => {
  try {
    logStream.writeLog("security", req.headers.cookie, req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error });
  }
});

log.post("/warning", requireTraceId, (req, res) => {
  try {
    logStream.writeLog("warning", req.headers.cookie, req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error });
  }
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
