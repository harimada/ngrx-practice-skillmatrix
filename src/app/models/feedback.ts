import { Message } from './message';

export interface Feedback extends Message {
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
}
