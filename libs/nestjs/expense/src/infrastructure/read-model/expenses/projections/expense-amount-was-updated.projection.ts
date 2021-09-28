import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ExpenseAmountWasUpdated } from '../../../../domain';
import { ExpenseDocument, EXPENSES_PROJECTION } from '../expense.schema';

@EventsHandler(ExpenseAmountWasUpdated)
export class ExpenseAmountWasUpdatedProjection
  implements IEventHandler<ExpenseAmountWasUpdated>
{
  constructor(
    @InjectModel(EXPENSES_PROJECTION)
    private readonly expenses: Model<ExpenseDocument>
  ) {}
  async handle(event: ExpenseAmountWasUpdated) {
    await this.expenses
      .findByIdAndUpdate(event.aggregateId, {
        amount: event.amount,
      })
      .exec();
  }
}
