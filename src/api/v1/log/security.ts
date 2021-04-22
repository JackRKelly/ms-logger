import { Router } from "express";
import signale from "signale";

export const security = Router();

security.post("/", (req, res) => {
  signale.warn(`Security Log:`, req.body);
  res.sendStatus(200);
});
