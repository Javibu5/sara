import { CheckInWasDoneProjection } from './check-in-was-done.projections';
import { CheckOutWasDoneProjection } from './check-out-was-done.projection';
import { CheckWasCreatedProjection } from './check-was-create.projection';

export * from './check.schema';

export const projectionHandlers = [
  CheckInWasDoneProjection,
  CheckOutWasDoneProjection,
  CheckWasCreatedProjection,
];
