import { CreditCardDto } from '@sara/contracts/credit-card';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CreditCardNumber } from '../../domain/model/creditCard-number';

export const CREDITCARD_FINDER = 'CREDITCARD_FINDER';

export interface ICreditCardFinder {
  findAll(): Promise<CreditCardDto[]>;
  findById(id: CreditCardId): Promise<CreditCardDto>;
  findByNumber(number: CreditCardNumber): Promise<CreditCardDto[]>;
}
