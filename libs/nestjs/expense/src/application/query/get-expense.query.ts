import { IQuery } from '@nestjs/cqrs';

export class GetExpenseQuery implements IQuery {
  constructor(public readonly id: string) {}
}
