import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CREDITCARD_FINDER, ICreditCardFinder } from "../services";
import { GetCreditCardsQuery } from "./get-credit-cards.query";

@QueryHandler(GetCreditCardsQuery)
export class GetCreditCardsHandler implements IQueryHandler<GetCreditCardsQuery>{
    constructor(
        @Inject(CREDITCARD_FINDER)
        private readonly finder: ICreditCardFinder
    ) { }

    async execute(query:GetCreditCardsQuery) { }
}