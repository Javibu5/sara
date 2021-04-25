import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { UserId } from '../../../user/domain';
import { Check } from '../../domain/model/check';
import { CheckId } from '../../domain/model/check-id';
import { CHECKS,Checks } from '../../domain/repository/checks';
import { CheckOutCommand } from './check-out.command';
import { CheckOutHandler } from './check-out.handler';

describe('CheckOutSpecHandler', () => {
  let command$: CheckOutHandler;

  const checks: Partial<Checks> = {};

  const checkId = CheckId.fromString(uuid());
  const employeeId = UserId.fromString(uuid());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckOutHandler,
        {
          provide: CHECKS,
          useValue: checks,
        },
      ],
    }).compile();

    command$ = module.get<CheckOutHandler>(CheckOutHandler);

    checks.find = jest.fn().mockResolvedValue(null);
    checks.save = jest.fn();
  });

  it('should register a check-out in a previous check', async () => {
    const date = new Date();
    const check = Check.withCheckIn(checkId, employeeId, date);
    checks.find = jest.fn().mockResolvedValue(check);

    await command$.execute(
      new CheckOutCommand(checkId.value, employeeId.value, date)
    );

    expect(checks.find(checkId)).not.toBe(null);
    expect(checks.save).toHaveBeenCalledWith(check);
    expect(check.outAt).toBe(date);
  });

  it('should register a check-out in a new check', async () => {
    const date = new Date();
    await command$.execute(
      new CheckOutCommand(checkId.value, employeeId.value, date)
    );

    await expect(checks.find(checkId)).resolves.toBe(null);
    expect(checks.save).toBeCalledWith(
      Check.withCheckOut(checkId, employeeId, date)
    );
  });
});
