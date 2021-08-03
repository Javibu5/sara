import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CheckWasCreated } from '../../../domain';
import { CheckDocument, CHECKS_PROJECTION } from './check.schema';

@EventsHandler(CheckWasCreated)
export class CheckWasCreatedProjection
  implements IEventHandler<CheckWasCreated>
{
  constructor(
    @InjectModel(CHECKS_PROJECTION)
    private readonly checks: Model<CheckDocument>
  ) {}

  async handle(event: CheckWasCreated) {
    const checkView = new this.checks({
      _id: event.id,
      employeeId: event.employeeId,
      inAt: null,
      outAt: null,
      isAutoClosed: false,
      createdAt: event.createdAt,
    });

    await checkView.save();
  }
}
