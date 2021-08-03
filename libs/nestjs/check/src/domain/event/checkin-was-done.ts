import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type CheckInWasDoneProps = {
  inAt: Date;
};

export class CheckInWasDone extends Event<CheckInWasDoneProps> {
  constructor(public readonly id: string, public readonly inAt: Date) {
    super(id, { inAt });
  }
}
