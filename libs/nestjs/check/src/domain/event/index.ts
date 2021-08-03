import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

import { CheckWasCreated, CheckWasCreatedProps } from './check-was-created';
import { CheckInWasDone, CheckInWasDoneProps } from './checkin-was-done';
import { CheckOutWasDone, CheckOutWasDoneProps } from './checkout-was-done';

export * from './check-was-created';
export * from './checkin-was-done';
export * from './checkout-was-done';

export const eventTransformers = {
  CheckWasCreated: (event: Event<CheckWasCreatedProps>) =>
    new CheckWasCreated(
      event.aggregateId,
      event.payload.employeeId,
      event.payload.createdAt
    ),
  CheckInWasDone: (event: Event<CheckInWasDoneProps>) =>
    new CheckInWasDone(event.aggregateId, event.payload.inAt),
  CheckOutWasDone: (event: Event<CheckOutWasDoneProps>) =>
    new CheckOutWasDone(event.aggregateId, event.payload.outAt),
};
