import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Check, CheckId, EmployeeId } from '../../domain';
import { CheckInCommand } from './check-in.command';

@CommandHandler(CheckInCommand)
export class CheckInHandler implements ICommandHandler<CheckInCommand> {
  constructor(
    @InjectAggregateRepository(Check)
    private readonly checks: AggregateRepository<Check, CheckId>
  ) {}

  async execute(command: CheckInCommand) {
    const checkId = CheckId.fromString(command.id);
    const employeeId = EmployeeId.fromString(command.employeeId);

    if (await this.checks.find(checkId)) {
      throw IdAlreadyRegisteredError.withId(checkId);
    }

    const check = Check.withCheckIn(checkId, employeeId, command.inAt);

    this.checks.save(check);
  }
}
