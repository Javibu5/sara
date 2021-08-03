import { AggregateRepository } from '@aulasoftwarelibre/nestjs-eventstore';
import { getRepositoryToken } from '@aulasoftwarelibre/nestjs-eventstore/dist/utils';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { Check, CheckId, EmployeeId } from '../../domain';
import { CheckInCommand } from './check-in.command';
import { CheckInHandler } from './check-in.handler';

describe('CheckInSpecHandler', () => {
  let command$: CheckInHandler;
  let checks: AggregateRepository<Check, CheckId>;

  const checkId = CheckId.fromString(uuid());
  const employeeId = EmployeeId.fromString(uuid());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckInHandler,
        {
          provide: getRepositoryToken(Check),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    command$ = module.get<CheckInHandler>(CheckInHandler);
    checks = module.get<AggregateRepository<Check, CheckId>>(
      getRepositoryToken(Check)
    );
  });

  it('should register a simple check-in', async () => {
    const date = new Date();
    await command$.execute(
      new CheckInCommand(checkId.value, employeeId.value, date)
    );

    expect(checks.save).toBeCalledTimes(1);
  });
});
