import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { commandHandlers } from '../application';
import { queryHandlers } from '../application/query';
import { eventTransformers, Expense } from '../domain';
import { ExpenseController } from './controller/expense.controller';
import { expenseProviders } from './expense.providers';
import {
  EXPENSES_PROJECTION,
  ExpenseSchema,
  projectionHandlers,
} from './read-model';
import { ExpenseService } from './services';

@Module({
  controllers: [ExpenseController],
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([Expense], eventTransformers),
    MongooseModule.forFeature([
      {
        name: EXPENSES_PROJECTION,
        schema: ExpenseSchema,
      },
    ]),
  ],
  providers: [
    ...expenseProviders,
    ...commandHandlers,
    ...queryHandlers,
    ...projectionHandlers,
    ExpenseService,
  ],
})
export class ExpenseModule {}
