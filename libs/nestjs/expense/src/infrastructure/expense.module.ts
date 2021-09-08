import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { commandHandlers } from '../application';
import { eventTransformers, Expense } from '../domain';
import { ExpenseController } from './controller/expense.controller';
import { ExpenseService } from './services';

@Module({
  controllers: [ExpenseController],
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([Expense], eventTransformers),
  ],

  providers: [...commandHandlers, ExpenseService],
  exports: [],
})
export class ExpenseModule {}
