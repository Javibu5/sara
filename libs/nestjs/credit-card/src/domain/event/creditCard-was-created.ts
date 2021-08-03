
import { Event } from '@aulasoftwarelibre/nestjs-eventstore'
import { RegisterCreditCardDto } from '@sara/contracts/credit-card'

export class CreditCardWasCreated extends Event<RegisterCreditCardDto> {
  constructor(public readonly id: string, public readonly card_number: string) {
    super(id, {
      _id: id,
      card_number
    });
  }
}
