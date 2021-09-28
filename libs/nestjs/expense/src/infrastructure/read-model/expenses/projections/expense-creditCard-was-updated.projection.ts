import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ExpenseCreditCardWasUpdated } from '../../../../domain';
import { ExpenseDocument, EXPENSES_PROJECTION } from '../expense.schema';

@EventsHandler(ExpenseCreditCardWasUpdated)
export class ExpenseCreditCardWasUpdatedProjection
  implements IEventHandler<ExpenseCreditCardWasUpdated>
{
  constructor(
    @InjectModel(EXPENSES_PROJECTION)
    private readonly expenses: Model<ExpenseDocument>
  ) {}
  async handle(event: ExpenseCreditCardWasUpdated) {
    await this.expenses
      .findByIdAndUpdate(event.aggregateId, {
        creditCardId: event.creditCardId,
      })
      .exec();
  }
}
