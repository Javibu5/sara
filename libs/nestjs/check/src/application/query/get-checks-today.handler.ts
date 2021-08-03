import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CheckDto } from '@sara/contracts/check';

import { EmployeeId } from '../../domain';
import { CHECK_FINDER, ICheckFinder } from '../services';
import { GetChecksTodayQuery } from './get-checks-today.query';

@QueryHandler(GetChecksTodayQuery)
export class GetChecksTodayHandler
  implements IQueryHandler<GetChecksTodayQuery>
{
  constructor(
    @Inject(CHECK_FINDER)
    private readonly finder: ICheckFinder
  ) {}

  async execute(query: GetChecksTodayQuery): Promise<CheckDto[]> {
    const employeeId = EmployeeId.fromString(query.idUser);
    const today = new Date();

    return this.finder.findByUserAndDate(employeeId, today);
  }
}
