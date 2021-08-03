import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserWasLocked } from '../../../domain';
import { UserDocument, USERS_PROJECTION } from './user.schema';

@EventsHandler(UserWasLocked)
export class UserWasLockedProjection implements IEventHandler<UserWasLocked> {
  constructor(
    @InjectModel(USERS_PROJECTION)
    private readonly users: Model<UserDocument>
  ) {}

  async handle(event: UserWasLocked) {
    this.users
      .findByIdAndUpdate(event.aggregateId, {
        lock: true,
      })
      .exec();
  }
}
