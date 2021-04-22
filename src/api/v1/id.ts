import { Router } from "express";
import signale from "signale";
import uniqid from "uniqid";

export const id = Router();

id.get("/", (req, res) => {
  try {
    let uid = uniqid("logging_microservice-");
    signale.info(`UID Generated: ${uid}`);
    res.status(200).json({
      uid,
    });
  } catch (error) {
    signale.error(error);
    res.sendStatus(500);
  }
});
