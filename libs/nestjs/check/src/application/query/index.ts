import { GetChecksHandler } from './get-checks.handler';
import { GetChecksTodayHandler } from './get-checks-today.handler';

export * from './get-checks.query';
export * from './get-checks-today.query';

export const queryHandlers = [GetChecksHandler, GetChecksTodayHandler];
