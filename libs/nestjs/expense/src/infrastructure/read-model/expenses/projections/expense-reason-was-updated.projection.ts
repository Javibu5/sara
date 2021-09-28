import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ExpenseReasonWasUpdated } from '../../../../domain';
import { ExpenseDocument, EXPENSES_PROJECTION } from '../expense.schema';

@EventsHandler(ExpenseReasonWasUpdated)
export class ExpenseReasonWasUpdatedProjection
  implements IEventHandler<ExpenseReasonWasUpdated>
{
  constructor(
    @InjectModel(EXPENSES_PROJECTION)
    private readonly expenses: Model<ExpenseDocument>
  ) {}
  async handle(event: ExpenseReasonWasUpdated) {
    await this.expenses
      .findByIdAndUpdate(event.aggregateId, {
        reason: event.reason,
      })
      .exec();
  }
}
