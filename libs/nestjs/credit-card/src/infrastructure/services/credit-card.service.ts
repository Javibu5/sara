import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreditCardDto,
  EditCardDto,
  RegisterCreditCardDto,
} from '@sara/contracts/credit-card';

import { CreditCardRegisterCommand } from '../../application/command/creditCard-register.command';
import { CreditCardUpdateCommand } from '../../application/command/creditCard-update.command';
import { GetCreditCardQuery } from '../../application/query/get-credit-card.query';
import { GetCreditCardsQuery } from '../../application/query/get-credit-cards.query';

@Injectable()
export class CreditCardService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async newCreditCard(
    registerCreditCard: RegisterCreditCardDto
  ): Promise<CreditCardDto> {
    await this.commandBus.execute(
      new CreditCardRegisterCommand(
        registerCreditCard._id,
        registerCreditCard.creditCardNumber
      )
    );
    return new CreditCardDto({ ...registerCreditCard });
  }

  findAll(): Promise<CreditCardDto[]> {
    return this.queryBus.execute(new GetCreditCardsQuery());
  }

  async findOne(id: string): Promise<CreditCardDto> {
    return this.queryBus.execute(new GetCreditCardQuery(id));
  }

  async update(id: string, editCardDto: EditCardDto): Promise<CreditCardDto> {
    await this.commandBus.execute(
      new CreditCardUpdateCommand(id, editCardDto.card_number)
    );

    const creditCard = await this.queryBus.execute(new GetCreditCardsQuery(id));

    return new CreditCardDto({ ...creditCard });
  }
}
