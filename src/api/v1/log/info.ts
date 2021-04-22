import { Router } from "express";
import signale from "signale";

export const info = Router();

info.post("/", (req, res) => {
  signale.info(`Info Log:`, req.body);
  res.sendStatus(200);
});
