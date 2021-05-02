import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { UserId } from '../../../user/domain';
import { CheckId } from '../../domain/model/check-id';
import { CHECKS, Checks } from '../../domain/repository/checks';
import { CheckInCommand } from './check-in.command';
import { CheckInHandler } from './check-in.handler';

describe('CheckInSpecHandler', () => {
  let command$: CheckInHandler;

  const checks: Partial<Checks> = {};

  const checkId = CheckId.fromString(uuid());
  const employeeId = UserId.fromString(uuid());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckInHandler,
        {
          provide: CHECKS,
          useValue: checks,
        },
      ],
    }).compile();

    command$ = module.get<CheckInHandler>(CheckInHandler);

    checks.find = jest.fn().mockResolvedValue(null);
    checks.save = jest.fn();
  });

  it('should register a simple check-in', async () => {
    const date = new Date();
    await command$.execute(
      new CheckInCommand(checkId.value, employeeId.value, date)
    );

    expect(checks.save).toBeCalledTimes(1);
  });
});
