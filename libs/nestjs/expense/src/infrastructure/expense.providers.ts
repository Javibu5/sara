import { Provider } from '@nestjs/common';

import { EXPENSE_FINDER } from '../application/service/expense-finder.interface';
import { ExpenseFinder } from './services/expense-finder.service';

export const expenseProviders: Provider[] = [
  { provide: EXPENSE_FINDER, useClass: ExpenseFinder },
];
