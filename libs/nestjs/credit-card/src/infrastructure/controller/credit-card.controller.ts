import { IdNotFoundError } from '@aulasoftwarelibre/nestjs-eventstore';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import {
  CreditCardDto,
  EditCardDto,
  RegisterCreditCardDto,
} from '@sara/contracts/credit-card';
import { Role, Roles } from '@sara/nestjs/common';
import { Response } from 'express';
import { catchError } from 'rxjs';

import { CreditCardService } from '../services/credit-card.service';

@ApiBearerAuth()
@Controller('creditCards')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Post()
  @Roles(Role.Admin)
  async registerCreditCard(
    @Body() registerCreditCardDto: RegisterCreditCardDto
  ): Promise<void> {
    try {
      await this.creditCardService.newCreditCard(registerCreditCardDto);
    } catch (e) {
      throw catchError(e);
    }
  }

  @Get()
  @Roles(Role.Admin)
  async findAll(
    @Res({ passthrough: true }) res: Response
  ): Promise<CreditCardDto[]> {
    try {
      const creditCards = await this.creditCardService.findAll();
      res.setHeader('X-Total-Count', creditCards.length);
      return creditCards;
    } catch (e) {
      throw catchError(e);
    }
  }

  @Get(':id')
  @Roles(Role.Admin)
  async findOne(@Param('id') id: string): Promise<CreditCardDto> {
    try {
      return this.creditCardService.findOne(id);
    } catch (e) {
      if (e instanceof IdNotFoundError) {
        throw new NotFoundException('CreditCard not found');
      } else {
        throw catchError(e);
      }
    }
  }

  @Put(':id')
  @Roles(Role.Admin)
  async update(@Param('id') id: string, @Body() creditCardDto: EditCardDto) {
    try {
      return await this.creditCardService.update(id, creditCardDto);
    } catch (e) {
      if (e instanceof IdNotFoundError) {
        throw new NotFoundException('Credit Card not found');
      } else {
        throw catchError(e);
      }
    }
  }
}
