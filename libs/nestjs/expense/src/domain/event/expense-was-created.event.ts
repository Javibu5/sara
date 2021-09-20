import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ExpenseWasCreatedProps = {
  _id: string;
  reason: string;
  amount: number;
  employeeId: string;
  creditCardId: string;
  status: string;
  createdAt: Date;
};
export class ExpenseWasCreated extends Event<ExpenseWasCreatedProps> {
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
