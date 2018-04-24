import { CommonResult } from './common-result';

export interface CommandResult<T> extends CommonResult {
  payload?: T;
}
