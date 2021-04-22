import { Router } from "express";
import signale from "signale";

export const error = Router();

error.post("/", (req, res) => {
  signale.error(`Info Log:`, req.body);
  res.sendStatus(200);
});
