import { Id } from '@aulasoftwarelibre/nestjs-eventstore';
import * as uuid from 'uuid';

export class ProjectId extends Id {
  static generate(): ProjectId {
    return new ProjectId(uuid.v4());
  }

  public static fromString(id: string): ProjectId {
    return new ProjectId(id);
  }
}
