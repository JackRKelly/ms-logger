import fs from "fs";

export class LogStream {
  stream: fs.WriteStream;

  writeLog(message: string) {
    this.stream.write(message);
  }

  constructor() {
    this.stream = fs.createWriteStream(`log-stream.log`, {
      flags: "a",
      autoClose: true,
    });
  }
}
