import { IdNotFoundError } from '@aulasoftwarelibre/nestjs-eventstore';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CheckDto } from '@sara/contracts/check';

import { CheckId } from '../../domain';
import { CHECK_FINDER, ICheckFinder } from '../services';
import { GetCheckQuery } from './get-check.query';

@QueryHandler(GetCheckQuery)
export class GetCheckHandler implements IQueryHandler<GetCheckQuery> {
  constructor(
    @Inject(CHECK_FINDER)
    private readonly finder: ICheckFinder
  ) {}

  async execute(query: GetCheckQuery): Promise<CheckDto> {
    const checkId = CheckId.fromString(query.id);

    const check = await this.finder.find(checkId);

    if (!check) {
      throw IdNotFoundError.withId(checkId);
    }

    return check;
  }
}
