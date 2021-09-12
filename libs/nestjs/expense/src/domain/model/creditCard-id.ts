import { Id } from '@aulasoftwarelibre/nestjs-eventstore';
import * as uuid from 'uuid';

export class CreditCardId extends Id {
  static generate(): CreditCardId {
    return new CreditCardId(uuid.v4());
  }

  public static fromString(id: string): CreditCardId {
    return new CreditCardId(id);
  }
}
