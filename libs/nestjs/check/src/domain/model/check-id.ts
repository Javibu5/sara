import { Id } from '@aulasoftwarelibre/nestjs-eventstore';
import * as uuid from 'uuid';

export class CheckId extends Id {
  static generate(): CheckId {
    return new CheckId(uuid.v4());
  }

  public static fromString(id: string): CheckId {
    return new CheckId(id);
  }
}
