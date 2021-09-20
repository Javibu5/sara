import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CreditCardDto } from '@sara/contracts/credit-card';

import { CreditCardId } from '../../domain/model/creditCard-id';
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

  async execute(
    query: GetCreditCardsQuery
  ): Promise<CreditCardDto[] | CreditCardDto> {
    if (!query.id) {
      return this.finder.findAll();
    }

    const creditCardId = CreditCardId.fromString(query.id);

    return this.finder.findById(creditCardId);
  }
}
