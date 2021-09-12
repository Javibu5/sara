import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CreditCardDto } from '@sara/contracts/credit-card';

import { CreditCardNumber } from '../../domain/model/creditCard-number';
import { CREDITCARD_FINDER, ICreditCardFinder } from '../services';
import { GetCreditCardsQuery } from './get-credit-cards.query';

@QueryHandler(GetCreditCardsQuery)
export class GetCreditCardsHandler
  implements IQueryHandler<GetCreditCardsQuery>
{
  constructor(
    @Inject(CREDITCARD_FINDER)
    private readonly finder: ICreditCardFinder
  ) {}

  async execute(query: GetCreditCardsQuery): Promise<CreditCardDto[]> {
    if (!query.number) {
      console.log('HoLAAA');
      return this.finder.findAll();
    }

    const creditCardNumber = CreditCardNumber.fromString(query.number);

    return this.finder.findByNumber(creditCardNumber);
  }
}
