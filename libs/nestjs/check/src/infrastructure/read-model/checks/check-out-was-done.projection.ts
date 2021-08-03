import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CheckOutWasDone } from '../../../domain/event/checkout-was-done';
import { CheckDocument, CHECKS_PROJECTION } from './check.schema';

@EventsHandler(CheckOutWasDone)
export class CheckOutWasDoneProjection
  implements IEventHandler<CheckOutWasDone>
{
  constructor(
    @InjectModel(CHECKS_PROJECTION)
    private readonly checks: Model<CheckDocument>
  ) {}

  async handle(event: CheckOutWasDone) {
    await this.checks
      .updateOne({ _id: event.id }, { $set: { outAt: event.outAt } })
      .exec();
  }
}
