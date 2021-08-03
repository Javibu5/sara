import {
  IdAlreadyRegisteredError,
  IdNotFoundError,
} from '@aulasoftwarelibre/nestjs-eventstore';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Post,
  Res,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CheckDto, RegisterCheckDto } from '@sara/contracts/check';
import { UserDto } from '@sara/contracts/user';
import { catchError, Role, Roles, User } from '@sara/nestjs/common';
import { Response } from 'express';

import { CheckService } from '../services';

@ApiBearerAuth()
@Controller('checks')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}

  @Post('in')
  @Roles(Role.Admin)
  async checkIn(
    @Body() registerCheckDto: RegisterCheckDto,
    @User() user: UserDto
  ): Promise<void> {
    try {
      this.checkService.checkIn(registerCheckDto, user._id);
    } catch (e) {
      if (e instanceof IdAlreadyRegisteredError) {
        throw new ConflictException(e.message);
      } else {
        throw catchError(e);
      }
    }
  }

  @Post('out')
  @Roles(Role.Admin)
  async checkOut(
    @Body() registerCheckDto: RegisterCheckDto,
    @User() user: UserDto
  ): Promise<void> {
    try {
      this.checkService.checkOut(registerCheckDto, user._id);
    } catch (e) {
      if (e instanceof IdAlreadyRegisteredError) {
        throw new ConflictException(e.message);
      } else {
        throw catchError(e);
      }
    }
  }

  @Get()
  @Roles(Role.Admin)
  async findAll(
    @Res({ passthrough: true }) res: Response
  ): Promise<CheckDto[]> {
    try {
      const checks = await this.checkService.findAll();

      res.setHeader('X-Total-Count', checks.length);

      return checks;
    } catch (e) {
      throw catchError(e);
    }
  }

  @Get('today')
  @Roles(Role.Admin)
  async findToday(@User() user: UserDto): Promise<CheckDto[]> {
    try {
      return this.checkService.findTodayByUser(user._id);
    } catch (e) {
      if (e instanceof IdNotFoundError) {
        throw new NotFoundException('User not found');
      } else {
        throw catchError(e);
      }
    }
  }
}
