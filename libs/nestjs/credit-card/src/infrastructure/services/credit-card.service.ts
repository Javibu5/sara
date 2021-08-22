import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import { RegisterCreditCardDto } from "@sara/contracts/credit-card";
import { CreditCardWasRegisterCommand } from "../../application/command/creditCard-register.command";

@Injectable()
export class CreditCardService {

    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) { }


    async newCreditCard(registerCreditCard: RegisterCreditCardDto) {
        await this.commandBus.execute(
            new CreditCardWasRegisterCommand(registerCreditCard._id, registerCreditCard.card_number)
        );
    }

    findAll(): Promise<CreditCardDto[]> {
        return this.queryBus.execute(new GetCreditCardsQuery());
    }

}