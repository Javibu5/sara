import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type CheckOutWasDoneProps = {
  outAt: Date;
};

export class CheckOutWasDone extends Event<CheckOutWasDoneProps> {
  constructor(public readonly id: string, public readonly outAt: Date) {
    super(id, { outAt });
  }
}
