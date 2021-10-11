import { IdNotFoundError } from '@aulasoftwarelibre/nestjs-eventstore';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { CreditCardDto } from '../../../../../contracts/credit-card/src';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CREDITCARD_FINDER, ICreditCardFinder } from '../services';
import { GetCreditCardQuery } from './get-credit-card.query';

@QueryHandler(GetCreditCardQuery)
export class GetCreditCardHandler implements IQueryHandler<GetCreditCardQuery> {
  constructor(
    @Inject(CREDITCARD_FINDER)
    private readonly finder: ICreditCardFinder
  ) {}

  async execute(query: GetCreditCardQuery): Promise<CreditCardDto> {
    const creditCardId = CreditCardId.fromString(query.id);

    const creditCard = await this.finder.findById(creditCardId);

    if (!creditCard) {
      throw IdNotFoundError.withId(creditCardId);
    }

    return creditCard;
  }
}
