import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventSourcingModule } from 'event-sourcing-nestjs';

import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [],
  imports: [
    AuthModule,
    CqrsModule,
    EventSourcingModule.forFeature(),
    DatabaseModule,
  ],
  providers: [],
})
export class CheckModule {}
