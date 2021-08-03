import { CheckInHandler } from './check-in.handler';
import { CheckOutHandler } from './check-out.handler';

export * from './check-in.command';
export * from './check-out.command';

export const commandHandlers = [CheckInHandler, CheckOutHandler];
