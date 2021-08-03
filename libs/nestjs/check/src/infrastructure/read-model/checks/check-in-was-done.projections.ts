import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CheckInWasDone } from '../../../domain';
import { CheckDocument, CHECKS_PROJECTION } from './check.schema';

@EventsHandler(CheckInWasDone)
export class CheckInWasDoneProjection implements IEventHandler<CheckInWasDone> {
  constructor(
    @InjectModel(CHECKS_PROJECTION)
    private readonly checks: Model<CheckDocument>
  ) {}

  async handle(event: CheckInWasDone) {
    await this.checks
      .updateOne({ _id: event.id }, { $set: { inAt: event.inAt } })
      .exec();
  }
}
