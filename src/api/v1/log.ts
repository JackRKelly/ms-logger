import { Router } from "express";
import { signale } from "../../lib/signale";

export const log = Router();

log.post("/critical", (req, res) => {
  signale.critical(`Critical Log:`, req.body);
  res.sendStatus(200);
});

log.post("/error", (req, res) => {
  signale.error(`Error Log:`, req.body);
  res.sendStatus(200);
});

log.post("/info", (req, res) => {
  signale.info(`Info Log:`, req.body);
  res.sendStatus(200);
});

log.post("/security", (req, res) => {
  signale.security(`Security Log:`, req.body);
  res.sendStatus(200);
});

log.post("/warn", (req, res) => {
  signale.warn(`Warn Log:`, req.body);
  res.sendStatus(200);
});
