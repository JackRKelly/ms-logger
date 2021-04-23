import { Router } from "express";
import { signale } from "../../lib/signale";
import { requireTraceId } from "../../util/middleware";

export const log = Router();

log.post("/critical", requireTraceId, (req, res) => {
  signale.critical(`Critical Log:`, req.body);
  res.sendStatus(200);
});

log.post("/error", requireTraceId, (req, res) => {
  signale.error(`Error Log:`, req.body);
  res.sendStatus(200);
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
  signale.success(`Get logs for:`, req.params.id);
  res.status(200).send({
    message: "This route is a work in progress, DB needs to be implemented",
  });
});
