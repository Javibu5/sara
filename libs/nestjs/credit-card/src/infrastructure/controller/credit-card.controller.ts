import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import {
  CreditCardDto,
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
      throw new Error(`Error al registrar la tarjeta de credito ${e.message}`);
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
}
