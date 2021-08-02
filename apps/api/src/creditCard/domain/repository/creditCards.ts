export interface CreditCards {
  find(creditCardId: CreditCardId): Promise<CreditCard | null>;
  save(creditCardId: CreditCardId): void;
}

export const CREDITCARDS = 'CREDITCARDS';
