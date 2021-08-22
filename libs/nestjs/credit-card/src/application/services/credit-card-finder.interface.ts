import { CreditCardDto } from '@sara/contracts/credit-card';
import { CreditCardId } from '../../domain/model/creditCard-id';



export const CREDITCARD_FINDER = 'CREDITCARD_FINDER';

export interface ICreditCardFinder {
    findAll(): Promise<CreditCardDto[]>;
    find(id: CreditCardId): Promise<CreditCardDto>;
}
