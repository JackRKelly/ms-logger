import { Router } from "express";

import { log } from "./log";
import { id } from "./id";

export const api = Router();

api.use("/log", log);
api.use("/id", id);
