import { Router } from "express";
import signale from "signale";

export const critical = Router();

critical.post("/", (req, res) => {
  signale.fatal(`Critical Log:`, req.body);
  res.sendStatus(200);
});
