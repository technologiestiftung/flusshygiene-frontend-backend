import { IBathingspot } from './iviews';

export interface IApiResponseBody {
  data: IBathingspot[];
  apiVersion: string;
  success: boolean;
  message: string;
  truncated?: boolean;
  skip?: number;
  limit?: number;
}
