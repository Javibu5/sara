import {
  AggregateRepository,
  DomainError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Check, CheckId, EmployeeId } from '../../domain';
import { CheckOutCommand } from './check-out.command';

@CommandHandler(CheckOutCommand)
export class CheckOutHandler implements ICommandHandler<CheckOutCommand> {
  constructor(
    @InjectAggregateRepository(Check)
    private readonly checks: AggregateRepository<Check, CheckId>
  ) {}

  async execute(command: CheckOutCommand) {
    const checkId = CheckId.fromString(command.id);
    const employeeId = EmployeeId.fromString(command.employeeId);

    let check = await this.checks.find(checkId);

    if (!check) {
      check = Check.withCheckOut(checkId, employeeId, command.outAt);
      this.checks.save(check);

      return;
    }

    if (check.outAt !== null) {
      throw DomainError.because('Last action was checkout');
    }

    check.checkOut(command.outAt);
    this.checks.save(check);
  }
}
