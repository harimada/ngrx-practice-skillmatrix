import { CommonResult } from './common-result';

export interface QueryResult<T> extends CommonResult {
  payload?: T[];
  offset?: number;
  max?: number;
  total?: number;
}
