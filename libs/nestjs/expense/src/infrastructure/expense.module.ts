import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { commandHandlers } from '../application';
import { queryHandlers } from '../application/query';
import { eventTransformers, Expense } from '../domain';
import { ExpenseController } from './controller/expense.controller';
import { ExpenseService } from './services';

@Module({
  controllers: [ExpenseController],
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([Expense], eventTransformers),
  ],

  providers: [...commandHandlers, ...queryHandlers, ExpenseService],
  exports: [],
})
export class ExpenseModule {}
