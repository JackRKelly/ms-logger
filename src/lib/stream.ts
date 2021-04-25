import fs from "fs";
import { IncomingHttpHeaders } from "http";
import signale from "signale";

export class LogStream {
  stream: fs.WriteStream;

  writeStream(message: string) {
    this.stream.write(message);
  }

  writeLog(type: string, headers: IncomingHttpHeaders, body: unknown) {}

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
