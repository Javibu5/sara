import {
  AggregateRepository,
  IdNotFoundError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Check, CheckId } from '../../domain';
import { UpdateCheckCommand } from './update-check.command';

@CommandHandler(UpdateCheckCommand)
export class UpdateCheckHandler implements ICommandHandler<UpdateCheckCommand> {
  constructor(
    @InjectAggregateRepository(Check)
    private readonly checks: AggregateRepository<Check, CheckId>
  ) {}

  async execute(command: UpdateCheckCommand) {
    const checkId = CheckId.fromString(command.checkId);

    const check = await this.checks.find(checkId);

    if (!check) {
      throw IdNotFoundError.withId(checkId);
    }

    this.updateCheckIn(check, command.updateCheckDto.inAt);
    this.updateCheckOut(check, command.updateCheckDto.outAt);

    this.checks.save(check);
  }

  updateCheckIn(check: Check, inAt: Date | undefined) {
    if (inAt === check.inAt) {
      return;
    }
    check.checkIn(inAt);
  }
  updateCheckOut(check: Check, outAt: Date | undefined) {
    if (outAt === check.outAt) {
      return;
    }
    check.checkOut(outAt);
  }
}
