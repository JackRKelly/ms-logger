import { Router } from "express";
import signale from "signale";

export const warning = Router();

warning.post("/", (req, res) => {
  signale.warn(`Warning Log:`, req.body);
  res.sendStatus(200);
});
