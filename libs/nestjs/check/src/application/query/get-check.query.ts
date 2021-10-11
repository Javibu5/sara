import { IQuery } from '@nestjs/cqrs';

export class GetCheckQuery implements IQuery {
  constructor(public readonly id: string) {}
}
