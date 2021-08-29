import { IQuery } from '@nestjs/cqrs';

export class GetCreditCardsQuery implements IQuery {
  constructor(public readonly number?: string) {}
}
