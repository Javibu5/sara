import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type CheckWasCreatedProps = {
  _id: string;
  employeeId: string;
  createdAt: Date;
};

export class CheckWasCreated extends Event<CheckWasCreatedProps> {
  constructor(
    public readonly id: string,
    public readonly employeeId: string,
    public readonly createdAt: Date
  ) {
    super(id, { _id: id, employeeId, createdAt });
  }
}
