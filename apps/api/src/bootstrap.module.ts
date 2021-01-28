import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventSourcingModule } from 'event-sourcing-nestjs';

import { RolesGuard } from './auth/security/roles.guard';
import { configService } from './config/config.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    EventSourcingModule.forRoot({ mongoURL: 'mongodb://localhost:27017/cqrs' }),
    DatabaseModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class BootstrapModule {}
