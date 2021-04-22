import { Signale } from "signale";

const options = {
  types: {
    critical: {
      badge: "❌",
      color: "red",
      label: "Critical",
      logLevel: "info",
    },
    security: {
      badge: "🔒",
      color: "yellow",
      label: "Security",
      logLevel: "info",
    },
  },
};

export const signale = new Signale(options);
