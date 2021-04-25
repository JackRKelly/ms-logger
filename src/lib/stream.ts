import fs from "fs";
import { IncomingHttpHeaders } from "http";
import signale from "signale";
import * as cookie from "cookie";

export class LogStream {
  stream: fs.WriteStream;

  writeStream(message: string) {
    this.stream.write(message);
  }

  writeLog(type: string, requestCookies: string | undefined, body: unknown) {
    let traceId: string | undefined;

    if (requestCookies) {
      const cookies = cookie.parse(requestCookies);

      traceId = cookies.traceId;
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
      flags: "a",
      autoClose: true,
    });
    this.stream.on("error", (err) => {
      signale.error(err);
    });
  }
}
