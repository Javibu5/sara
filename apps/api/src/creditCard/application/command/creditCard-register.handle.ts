import { Inject } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';
import { CreditCard } from '../../domain/model/creditCard'
import { CREDITCARDS, CreditCards } from '../../domain/repository/creditCards';
import { CreditCardWasRegisterCommand } from './creditCard-register.command';

export class CreditCardWasRegisterHandler
  implements ICommandHandler<CreditCardWasRegisterCommand> {
  constructor(@Inject(CREDITCARDS) private creditCards: CreditCards) {}

  async execute(commmand: CreditCardWasRegisterCommand){
    const creditCardId = commmand.id;
    const creditCardNumber = commmand.cardNumber;
  
    if (await this.creditCards.find(creditCardId)){
      throw new Error();
    }

    const creditCard = CreditCard.
  
  }

}
