import { IQuery } from "@nestjs/cqrs";

export class GetChecksQuery implements IQuery {
    constructor(
        public readonly idUser ?: string
    ){}
}