import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ExpenseDto } from '../../../../../contracts/expense/src';
import { IExpenseFinder } from '../../application/service/expense-finder.interface';
import { ExpenseDocument, EXPENSES_PROJECTION } from '../read-model';

export class ExpenseFinder implements IExpenseFinder {
  constructor(
    @InjectModel(EXPENSES_PROJECTION)
    private readonly expenses: Model<ExpenseDocument>
  ) {}
  async findAll(): Promise<ExpenseDto[]> {
    const expenses = await this.expenses.find().lean();

    return expenses.map((expense) => new ExpenseDto(expense));
  }
}
