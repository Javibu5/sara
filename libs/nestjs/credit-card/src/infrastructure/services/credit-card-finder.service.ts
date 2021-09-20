import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreditCardDto } from '@sara/contracts/credit-card';
import { Model } from 'mongoose';

import { ICreditCardFinder } from '../../application/services';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CreditCardNumber } from '../../domain/model/creditCard-number';
import {
  CREDITCARD_PROJECTION,
  CreditCardDocument,
} from '../read-model/credit-card/credit-card.schema';

@Injectable()
export class CreditCardFinder implements ICreditCardFinder {
  constructor(
    @InjectModel(CREDITCARD_PROJECTION)
    private readonly creditCards: Model<CreditCardDocument>
  ) {}

  async findAll(): Promise<CreditCardDto[]> {
    const creditCards = await this.creditCards.find().lean();

    return creditCards.map((creditCard) => new CreditCardDto(creditCard));
  }
  async findById(id: CreditCardId): Promise<CreditCardDto> {
    const creditCard = await this.creditCards.findById(id.value).lean();
    return new CreditCardDto(creditCard);
  }
  async findByNumber(number: CreditCardNumber): Promise<CreditCardDto[]> {
    const creditCards = await this.creditCards
      .find({ creditCardNumber: number.value })
      .lean();

    return creditCards.map((creditCard) => new CreditCardDto(creditCard));
  }
}
