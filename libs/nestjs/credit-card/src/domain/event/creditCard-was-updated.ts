import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type CreditCardWasUpdatedProps = {
  cardNumber: string;
};

export class CreditCardWasUpdate extends Event<CreditCardWasUpdatedProps> {
  constructor(public readonly id: string, public readonly cardNumber) {
    super(id, {
      cardNumber,
    });
  }
}
