import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { ExpenseDto } from '@sara/contracts/expense';

export class ExpenseWasCreated extends Event<ExpenseDto> {
  constructor(
    public readonly id: string,
    public readonly reason: string,
    public readonly amount: number,
    public readonly employeeId: string,
    public readonly creditCardId: string,
    public readonly status: string,
    public readonly createdAt: Date
  ) {
    super(id, {
      _id: id,
      reason,
      amount,
      employeeId,
      creditCardId,
      status,
      createdAt,
    });
  }
}
