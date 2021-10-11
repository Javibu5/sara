import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CheckDto,
  EditCheckDto,
  RegisterCheckDto,
} from '@sara/contracts/check';

import {
  CheckInCommand,
  CheckOutCommand,
  GetCheckQuery,
  GetChecksQuery,
  GetChecksTodayQuery,
} from '../../application';
import { UpdateCheckCommand } from '../../application/command/update-check.command';

@Injectable()
export class CheckService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async findAll(): Promise<CheckDto[]> {
    return this.queryBus.execute(new GetChecksQuery());
  }

  async checkIn(registerCheckDto: RegisterCheckDto, employeeId: string) {
    await this.commandBus.execute(
      new CheckInCommand(registerCheckDto._id, employeeId, new Date())
    );
  }

  async checkOut(registerCheckDto: RegisterCheckDto, employeeId: string) {
    await this.commandBus.execute(
      new CheckOutCommand(registerCheckDto._id, employeeId, new Date())
    );
  }

  async update(id: string, editCheckDto: EditCheckDto): Promise<CheckDto> {
    await this.commandBus.execute(new UpdateCheckCommand(id, editCheckDto));

    const check = await this.queryBus.execute(new GetCheckQuery(id));

    return new CheckDto({ ...check });
  }

  async findTodayByUser(employeeId: string): Promise<CheckDto[]> {
    return this.queryBus.execute(new GetChecksTodayQuery(employeeId));
  }

  async findOne(id: string): Promise<CheckDto> {
    return this.queryBus.execute(new GetCheckQuery(id));
  }
}
