import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { commandHandlers, queryHandlers } from '../application';
import { Check, eventTransformers } from '../domain';
import { checkProviders } from './check.providers';
import { CheckController } from './controller';
import {
  CHECKS_PROJECTION,
  CheckSchema,
  projectionHandlers,
} from './read-model';
import { CheckService } from './services';

@Module({
  controllers: [CheckController],
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([Check], eventTransformers),
    MongooseModule.forFeature([
      {
        name: CHECKS_PROJECTION,
        schema: CheckSchema,
      },
    ]),
  ],
  providers: [
    ...checkProviders,
    ...commandHandlers,
    ...queryHandlers,
    ...projectionHandlers,
    CheckService,
  ],
})
export class CheckModule {}
