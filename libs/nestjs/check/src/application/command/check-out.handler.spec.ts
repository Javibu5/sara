import { AggregateRepository } from '@aulasoftwarelibre/nestjs-eventstore';
import { getRepositoryToken } from '@aulasoftwarelibre/nestjs-eventstore/dist/utils';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { Check, CheckId, EmployeeId } from '../../domain';
import { CheckOutCommand } from './check-out.command';
import { CheckOutHandler } from './check-out.handler';

describe('CheckOutSpecHandler', () => {
  let command$: CheckOutHandler;
  let checks: AggregateRepository<Check, CheckId>;

  const checkId = CheckId.fromString(uuid());
  const employeeId = EmployeeId.fromString(uuid());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckOutHandler,
        {
          provide: getRepositoryToken(Check),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    command$ = module.get<CheckOutHandler>(CheckOutHandler);
    checks = module.get<AggregateRepository<Check, CheckId>>(
      getRepositoryToken(Check)
    );
  });

  it('should register a check-out in a previous check', async () => {
    const date = new Date();
    const check = Check.withCheckIn(checkId, employeeId, date);

    jest.spyOn(checks, 'find').mockReturnValue(Promise.resolve(check));

    await command$.execute(
      new CheckOutCommand(checkId.value, employeeId.value, date)
    );

    expect(checks.save).toHaveBeenCalledWith(check);
  });

  it('should register a check-out in a new check', async () => {
    const date = new Date();

    jest.spyOn(checks, 'find').mockReturnValue(null);

    await command$.execute(
      new CheckOutCommand(checkId.value, employeeId.value, date)
    );

    expect(checks.save).toHaveBeenCalledWith(
      expect.objectContaining({
        _inAt: null,
        _outAt: date,
      })
    );
  });
});
