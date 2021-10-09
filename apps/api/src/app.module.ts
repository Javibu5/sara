import {
  EVENTSTORE_KEYSTORE_CONNECTION,
  EventStoreModule,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '@sara/nestjs/auth';
import { CheckModule } from '@sara/nestjs/check';
import { CreditCardModule } from '@sara/nestjs/credit-card';
import { ExpenseModule } from '@sara/nestjs/expense';
import { UserModule } from '@sara/nestjs/user';
import { ProjectModule } from '@sara/nestjs/project'
import { TaskModule } from '@sara/nestjs/task'
import { ConsoleModule } from 'nestjs-console';

import configuration from './app.config';
import { AppLoggerMiddleware } from './app.middleware';
import { appProviders } from './app.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ConsoleModule,
    CqrsModule,
    MongooseModule.forRoot(
      process.env.DATABASE_URL || 'mongodb://localhost/sara',
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
      }
    ),
    MongooseModule.forRoot(
      process.env.KEYSTORE_URI || 'mongodb://localhost/keystore',
      {
        connectionName: EVENTSTORE_KEYSTORE_CONNECTION,
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
      }
    ),
    EventStoreModule.forRoot({
      category: process.env.EVENTSTORE_STREAM || 'sara',
      connection:
        process.env.EVENTSTORE_URL || 'esdb://localhost:2113?tls=false',
    }),
    // Project modules
    AuthModule,
    UserModule,
    CheckModule,
    CreditCardModule,
    ExpenseModule,
    ProjectModule,
    TaskModule,
  ],
  providers: [...appProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
