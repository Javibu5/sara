import { Id } from '@aulasoftwarelibre/nestjs-eventstore';
import * as uuid from 'uuid';

export class ExpenseId extends Id {
  static generate(): ExpenseId {
    return new ExpenseId(uuid.v4());
  }

  public static fromString(id: string): ExpenseId {
    return new ExpenseId(id);
  }
}
