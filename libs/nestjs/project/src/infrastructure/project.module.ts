import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { commandHandlers, queryHandlers } from '../application';
import { eventTransformers, Project } from '../domain';
import { ProjectController } from './controller/project.controller';
import { projectProviders } from './project.providers';
import { projectionHandlers, ProjectSchema, PROJECT_PROJECTION } from './read-model'
import { ProjectService } from './services';

@Module({
  controllers: [ProjectController],
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([Project], eventTransformers),
    MongooseModule.forFeature([
      {
        name: PROJECT_PROJECTION,
        schema: ProjectSchema,
      },
    ]),
  ],
  providers: [
    ...projectProviders,
    ...commandHandlers,
    ...queryHandlers,
    ...projectionHandlers,
    ProjectService,
  ],
})
export class ProjectModule { }
