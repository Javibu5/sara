import { IdAlreadyRegisteredError } from '@aulasoftwarelibre/nestjs-eventstore';
import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateExpenseDto } from '@sara/contracts/expense';
import { catchError, Role, Roles } from '@sara/nestjs/common';

import { ExpenseService } from '../services';

@ApiBearerAuth()
@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  @Roles(Role.Admin)
  async create(@Body() expense: CreateExpenseDto): Promise<void> {
    try {
      return await this.expenseService.create(expense);
    } catch (e) {
      if (e instanceof IdAlreadyRegisteredError) {
        throw new ConflictException(e.message);
      } else {
        throw catchError(e);
      }
    }
  }
}
