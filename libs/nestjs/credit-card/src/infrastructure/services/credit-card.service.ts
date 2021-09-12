import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreditCardDto,
  RegisterCreditCardDto,
} from '@sara/contracts/credit-card';

import { CreditCardWasRegisterCommand } from '../../application/command/creditCard-register.command';
import { GetCreditCardsQuery } from '../../application/query/get-credit-cards.query';

@Injectable()
export class CreditCardService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async newCreditCard(registerCreditCard: RegisterCreditCardDto) {
    await this.commandBus.execute(
      new CreditCardWasRegisterCommand(
        registerCreditCard._id,
        registerCreditCard.card_number
      )
    );
  }

  findAll(): Promise<CreditCardDto[]> {
    const creditCards = this.queryBus.execute(new GetCreditCardsQuery());
    return creditCards;
  }
}
