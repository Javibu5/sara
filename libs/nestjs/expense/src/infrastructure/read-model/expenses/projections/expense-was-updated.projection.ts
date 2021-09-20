import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  ExpenseAmountWasUpdated,
  ExpenseCreditCardWasUpdated,
  ExpenseReasonWasUpdated,
} from '../../../../domain';
import { ExpenseDocument, EXPENSES_PROJECTION } from '..';

const events = {
  amountWasUpdated: ExpenseAmountWasUpdated,
  reasonWasUpdated: ExpenseReasonWasUpdated,
  creditCardWasUpdated: ExpenseCreditCardWasUpdated,
};

@EventsHandler(events)
export class ExpenseWasUpdatedProjection
  implements IEventHandler<ExpenseAmountWasUpdated>
{
  constructor(
    @InjectModel(EXPENSES_PROJECTION)
    private readonly expenses: Model<ExpenseDocument>
  ) {}
  async handle(events) {
    await this.expenses
      .findByIdAndUpdate(events.amountWasUpdated.aggregateId, {
        reason: events.reasonWasUpdated.reason,
        amount: events.amountWasUpdated.amount,
        creditCardId: events.creditCardWasUpdated.creditCardId,
      })
      .exec();
  }
}
