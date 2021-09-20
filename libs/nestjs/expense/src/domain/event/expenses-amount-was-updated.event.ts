import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ExpenseAmountWasUpdatedProps = {
  amount: number;
};

export class ExpenseAmountWasUpdated extends Event<ExpenseAmountWasUpdatedProps> {
  constructor(public readonly id: string, public readonly amount: number) {
    super(id, {
      amount,
    });
  }
}
