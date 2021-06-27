import { _, EmptyPayload, makeEndpoint, SuccessPayload } from "../ipc";
import { NewsItem } from "./types";

export const fetchNewsFeed = makeEndpoint.main("fetchNewsFeed", <EmptyPayload>_, <NewsItem[]>_);

export const checkValidIso = makeEndpoint.main(
  "checkValidIso",
  <{ path: string }>_,
  <{ path: string; valid: boolean }>_,
);

export const notifyOfUpdate = makeEndpoint.main("notifyOfEndpoint", <EmptyPayload>_, <SuccessPayload>_);
