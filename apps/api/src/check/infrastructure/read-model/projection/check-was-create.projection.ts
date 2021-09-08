import { Inject } from '@nestjs/common';
import { IViewUpdater, ViewUpdaterHandler } from 'event-sourcing-nestjs';
import { Model } from 'mongoose';

import { CheckWasCreated } from '../../../domain/event/check-was-created';
import { CheckView } from '../schema/check.schema';

@ViewUpdaterHandler(CheckWasCreated)
export class CheckWasCreatedProjection
  implements IViewUpdater<CheckWasCreated> {
  constructor(
    @Inject('CHECK_MODEL') private readonly checkModel: Model<CheckView>
  ) {}

  async handle(event: CheckWasCreated) {
    const checkView = new this.checkModel({
      _id: event.id,
      employeeId: event.employeeId,
      inAt: event.inAt,
      outAt: event.outAt,
      isAutoClosed: false,
      createdAt: event.createdAt,
    });

    await checkView.save();
  }
}
