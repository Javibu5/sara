import {
  IdAlreadyRegisteredError,
  IdNotFoundError,
} from '@aulasoftwarelibre/nestjs-eventstore';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  Res,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateExpenseDto, ExpenseDto } from '@sara/contracts/expense';
import { UserDto } from '@sara/contracts/user';
import { catchError, Role, Roles, User } from '@sara/nestjs/common';
import { Response } from 'express';

import { ExpenseService } from '../services';

@ApiBearerAuth()
@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  @Roles(Role.Admin)
  async create(
    @Body() expense: CreateExpenseDto,
    @User() user: UserDto
  ): Promise<void> {
    try {
      return await this.expenseService.create(expense, user);
    } catch (e) {
      if (e instanceof IdAlreadyRegisteredError) {
        throw new ConflictException(e.message);
      } else {
        throw catchError(e);
      }
    }
  }

  @Get()
  async findAll(
    @Res({ passthrough: true }) res: Response
  ): Promise<ExpenseDto[]> {
    try {
      const expenses = await this.expenseService.findAll();
      const length = expenses.length;

      res.setHeader('X-Total-Count', length);

      return expenses;
    } catch (e) {
      throw catchError(e.message);
    }
  }
}
