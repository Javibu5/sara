import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type CreditCardWasCreatedProps = {
  _id: string;
  creditCardNumber: string;
};
export class CreditCardWasCreated extends Event<CreditCardWasCreatedProps> {
  constructor(public readonly id: string, public readonly card_number: string) {
    super(id, {
      _id: id,
      creditCardNumber: card_number,
    });
  }
}
