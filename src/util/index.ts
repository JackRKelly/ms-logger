import * as cookie from "cookie";

export const getTraceId = (rawCookies: string): string | null => {
  const cookies = cookie.parse(rawCookies);

  return cookies.traceId ? cookies.traceId : null;
};
