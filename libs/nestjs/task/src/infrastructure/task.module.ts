import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { commandHandlers, queryHandlers } from '../application';
import { eventTransformers, Task } from '../domain';
import { TaskController } from './controller';
import { projectionHandlers, TASKS_PROJECTION, TaskSchema } from './read-model';
import { TaskService } from './services';
import { taskProviders } from './task.providers';

@Module({
  controllers: [TaskController],
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([Task], eventTransformers),
    MongooseModule.forFeature([
      {
        name: TASKS_PROJECTION,
        schema: TaskSchema,
      },
    ]),
  ],
  providers: [
    ...taskProviders,
    ...commandHandlers,
    ...queryHandlers,
    ...projectionHandlers,
    TaskService
  ],
})
export class TaskModule { }
