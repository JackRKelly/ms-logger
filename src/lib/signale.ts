import { Signale } from "signale";

const options = {
  types: {
    critical: {
      badge: "xxx",
      color: "red",
      label: "critical",
      logLevel: "info",
    },
    error: {
      badge: "xx",
      color: "red",
      label: "critical",
      logLevel: "info",
    },
    security: {
      badge: "x",
      color: "yellow",
      label: "security",
      logLevel: "info",
    },
    warning: {
      badge: "!!",
      color: "yellow",
      label: "warning",
      logLevel: "info",
    },
    info: {
      badge: "i",
      color: "magenta",
      label: "info",
      logLevel: "info",
    },
  },
};

export const signale = new Signale(options);
