import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';


@Module({
  controllers: [],
  imports: [
    CqrsModule,
  ],
  providers: [],
})
export class CheckModule { }
