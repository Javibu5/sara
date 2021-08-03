import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CheckDto } from '@sara/contracts/check';

import { EmployeeId } from '../../domain';
import { CHECK_FINDER, ICheckFinder } from '../services';
import { GetChecksQuery } from './get-checks.query';

@QueryHandler(GetChecksQuery)
export class GetChecksHandler implements IQueryHandler<GetChecksQuery> {
  constructor(
    @Inject(CHECK_FINDER)
    private readonly finder: ICheckFinder
  ) {}

  async execute(query: GetChecksQuery): Promise<CheckDto[]> {
    if (!query.idUser) {
      return this.finder.findAll();
    }

    const employeeId = EmployeeId.fromString(query.idUser);

    return this.finder.findByUser(employeeId);
  }
}
