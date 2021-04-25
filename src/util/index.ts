import * as cookie from "cookie";

export const getTraceId = (rawCookies: string): string | undefined => {
  const cookies = cookie.parse(rawCookies);

  if (cookies.traceId) {
    return cookies.traceId;
  }
};
