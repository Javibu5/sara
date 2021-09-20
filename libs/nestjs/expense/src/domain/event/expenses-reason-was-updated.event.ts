import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ExpenseReasonWasUpdatedProps = {
  reason: string;
};

export class ExpenseReasonWasUpdated extends Event<ExpenseReasonWasUpdatedProps> {
  constructor(public readonly id: string, public readonly reason: string) {
    super(id, {
      reason,
    });
  }
}
