import {
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  Res,
} from '@nestjs/common';
import {
  CreditCardDto,
  RegisterCreditCardDto,
} from '@sara/contracts/credit-card';
import { Role, Roles, User } from '@sara/nestjs/common';
import { CreditCardService } from '../services/credit-card.service';
import { catchError } from 'rxjs';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('creditCards')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) { }

  @Post('registerCreditCard')
  @Roles(Role.Admin)
  async registerCreditCard(
    @Body() registerCreditCardDto: RegisterCreditCardDto,
  ): Promise<void> {
    try {
      await this.creditCardService.newCreditCard(registerCreditCardDto);
    } catch (e) {
      throw new Error(`Error al registrar la tarjeta de credito ${e.message}`)
    }
  }

  @Get('getCreditCards')
  @Roles(Role.Admin)
  async findAll(
  ): Promise<CreditCardDto[]> {
    try {
      const creditCards = await this.creditCardService.findAll();
      return creditCards;
    } catch (e) {
      throw catchError(e);
    }
  }
}
