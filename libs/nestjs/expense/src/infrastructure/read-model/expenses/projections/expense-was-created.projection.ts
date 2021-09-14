import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ExpenseWasCreated } from '../../../../domain';
import { ExpenseDocument, EXPENSES_PROJECTION } from '../expense.schema';

@EventsHandler(ExpenseWasCreated)
export class ExpenseWasCreatedProjection
  implements IEventHandler<ExpenseWasCreated>
{
  constructor(
    @InjectModel(EXPENSES_PROJECTION)
    private readonly expenses: Model<ExpenseDocument>
  ) {}

  async handle(event: ExpenseWasCreated) {
    const expense = new this.expenses({ ...event.payload });

    await expense.save();
  }
}
