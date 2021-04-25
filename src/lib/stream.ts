import fs from "fs";
import signale from "signale";
import { LogType } from "../types";
import { getTraceId } from "../util";

export class LogStream {
  stream: fs.WriteStream;

  writeStream(message: string) {
    this.stream.write(message);
  }

  writeLog(type: LogType, cookies: string | undefined, body: unknown) {
    let traceId: string | undefined;

    if (cookies) {
      traceId = getTraceId(cookies);
    }

    this.writeStream(
      `${new Date().toISOString()} | Type: ${type} | Trace ID: ${traceId} | Body: ${JSON.stringify(
        body
      )}\n`
    );
  }

  endStream() {
    this.stream.end();
    signale.info("Log Stream ended");
  }

  constructor() {
    this.stream = fs.createWriteStream(`logs/log-stream.log`, {
      autoClose: true,
    });
    this.stream.on("error", (err) => {
      signale.error(err);
    });
  }
}
