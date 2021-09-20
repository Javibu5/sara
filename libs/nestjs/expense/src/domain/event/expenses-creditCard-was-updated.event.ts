import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type ExpenseCreditCardWasUpdatedProps = {
  creditCardId: string;
};

export class ExpenseCreditCardWasUpdated extends Event<ExpenseCreditCardWasUpdatedProps> {
  constructor(
    public readonly id: string,
    public readonly creditCardId: string
  ) {
    super(id, {
      creditCardId,
    });
  }
}
