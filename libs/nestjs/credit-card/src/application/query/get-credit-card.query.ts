import { IQuery } from '@nestjs/cqrs';

export class GetCreditCardQuery implements IQuery {
  constructor(public readonly id: string) {}
}
