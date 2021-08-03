import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CheckDto, RegisterCheckDto } from '@sara/contracts/check';

import {
  CheckInCommand,
  CheckOutCommand,
  GetChecksQuery,
  GetChecksTodayQuery,
} from '../../application';

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

  async findTodayByUser(employeeId: string): Promise<CheckDto[]> {
    return this.queryBus.execute(new GetChecksTodayQuery(employeeId));
  }
}
