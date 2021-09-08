import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventSourcingModule } from 'event-sourcing-nestjs';

import { AuthModule } from '../../auth/auth.module';
import { DatabaseModule } from '../../database/database.module';
import { RegisterTaskHandler } from '../application/command/register-task.handler';
import { GetTasksHandler } from '../application/query/get-tasks.query.handler';
import { TaskController } from './controller/task.controller';
import { TaskWasRegisterProjection } from './read-model/projection/task-was-register.projection';
import { TaskMapper } from './repository/task.mapper';
import { TaskProviders } from './task.providers';

const CommandHandlers = [RegisterTaskHandler];
const ProjectionHandlers = [TaskWasRegisterProjection];
const QueryHandlers = [GetTasksHandler];

@Module({
  controllers: [TaskController],
  imports: [
    AuthModule,
    CqrsModule,
    EventSourcingModule.forFeature(),
    DatabaseModule,
  ],
  providers: [
    ...ProjectionHandlers,
    ...CommandHandlers,
    ...QueryHandlers,
    TaskMapper,
    ...TaskProviders,
  ],
})
export class TaskModule {}
