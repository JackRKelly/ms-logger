import { Router } from "express";

import { info } from "./log/info";
import { error } from "./log/error";
import { critical } from "./log/critical";
import { security } from "./log/security";
import { warning } from "./log/warning";

export const log = Router();

log.use("/info", info);
log.use("/error", error);
log.use("/critical", critical);
log.use("/security", security);
log.use("/warning", warning);
