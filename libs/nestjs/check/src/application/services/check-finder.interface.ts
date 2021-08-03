import { CheckDto } from '@sara/contracts/check';

import { CheckId, EmployeeId } from '../../domain';

export const CHECK_FINDER = 'CHECK_FINDER';

export interface ICheckFinder {
  findAll(): Promise<CheckDto[]>;
  find(id: CheckId): Promise<CheckDto>;
  findByUser(id: EmployeeId): Promise<CheckDto[]>;
  findByUserAndDate(id: EmployeeId, date: Date): Promise<CheckDto[]>;
}
