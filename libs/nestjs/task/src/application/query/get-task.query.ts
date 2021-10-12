import { IQuery } from '@nestjs/cqrs';

export class GetTaskQuery implements IQuery {
  constructor(public readonly id: string) {}
}
