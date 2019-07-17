import { IServerResponse } from "./server-response.interface";

export interface IServerResponseList<T> extends IServerResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
