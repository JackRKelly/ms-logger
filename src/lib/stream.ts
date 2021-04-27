import fs from "fs";
import signale from "signale";
import path from "path";
import { LogType } from "../types";
import { getTraceId } from "../util";

export class LogStream {
  stream: fs.WriteStream;

  writeStream(message: string) {
    this.stream.write(message);
  }

  writeLog(type: LogType, cookies: string | undefined, body: unknown) {
    let traceId: string | null = null;

    if (cookies) {
      traceId = getTraceId(cookies);
    }

    this.writeStream(
      `${new Date().toISOString()} | Type: ${type} | Trace ID: ${traceId} | Body: ${JSON.stringify(
        body
      )}\n`
    );
  }

  validateLogs() {
    if (require?.main?.path) {
      let appRoot = path.dirname(require.main.path);

      if (!fs.existsSync(`${appRoot}/logs`)) {
        fs.mkdir(`${appRoot}/logs`, (err) => {
          if (err) {
            signale.error(err);
          }
        });
      }
    } else {
      throw new Error("Unable to retrieve working directory.");
    }
  }

  endStream() {
    this.stream.end();
    signale.info("Log Stream ended");
  }

  constructor() {
    this.validateLogs();
    this.stream = fs.createWriteStream(`logs/log-stream.log`, {
      autoClose: true,
    });
    this.stream.on("error", (err) => {
      signale.error(err);
    });
  }
}
