import { IQuery } from "@nestjs/cqrs";

export class GetChecksTodayQuery implements IQuery {
    constructor(
        public readonly idUser?: string
    ) { }
}