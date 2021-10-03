import { IQuery } from '@nestjs/cqrs';

export class GetProjectQuery implements IQuery {
    constructor(public readonly id: string) { }
}