import { IQuery } from '@nestjs/cqrs';

export class GetTasksQuery implements IQuery {
  constructor(public readonly idUser?: string) {}
}
