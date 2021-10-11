import { CheckInHandler } from './check-in.handler';
import { CheckOutHandler } from './check-out.handler';
import { UpdateCheckHandler } from './update-handler.handler';

export * from './check-in.command';
export * from './check-out.command';
export * from './update-check.command';
export const commandHandlers = [
  CheckInHandler,
  CheckOutHandler,
  UpdateCheckHandler,
];
