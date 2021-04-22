/// <reference types="node" />

declare module "parse-headers" {
  export default function parse(headers: IncomingHttpHeaders): object;
}
