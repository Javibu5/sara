import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { CreateExpenseDto } from '@sara/contracts/expense';

export class ExpenseWasCreated extends Event<CreateExpenseDto> {
  constructor(public readonly id: string) {
    super(id, {
      _id: id,
      reason: null,
      amount: 0,
      employeeId: null,
      creditCardId: null,
      status: null,
      createdAt: null,
    });
  }
}
