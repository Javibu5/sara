import { AggregateRoot } from '@nestjs/cqrs';

import { UserId } from '../../../user/domain';
import { CheckWasCreated } from '../event/check-was-created';
import { CheckInWasDone } from '../event/checkin-was-done';
import { CheckOutWasDone } from '../event/checkout-was-done';
import { CheckId } from './check-id';

export class Check extends AggregateRoot {
  private _checkId: CheckId;
  private _employeeId: UserId;
  private _inAt?: Date;
  private _outAt?: Date;
  private _isAutoClosed: boolean;
  private _createdAt: Date;

  private constructor() {
    super();
  }

  public static withCheckIn(
    checkId: CheckId,
    employeeId: UserId,
    inAt: Date
  ): Check {
    const check = new Check();

    check.apply(
      new CheckWasCreated(checkId.value, employeeId.value, new Date())
    );

    check.checkIn(inAt);

    return check;
  }

  public static withCheckOut(
    checkId: CheckId,
    employeeId: UserId,
    outAt: Date
  ): Check {
    const check = new Check();

    check.apply(
      new CheckWasCreated(checkId.value, employeeId.value, new Date())
    );

    check.checkOut(outAt);

    return check;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
  get outAt(): Date {
    return this._outAt;
  }

  public checkIn(inAt: Date) {
    if (inAt === this._inAt) {
      return;
    }

    this.apply(new CheckInWasDone(this._checkId.value, inAt));
  }

  public checkOut(outAt: Date) {
    if (outAt === this._outAt) {
      return;
    }

    this.apply(new CheckOutWasDone(this._checkId.value, outAt));
  }

  private onCheckWasCreated(event: CheckWasCreated) {
    this._checkId = CheckId.fromString(event.id);
    this._employeeId = UserId.fromString(event.employeeId);
    this._inAt = null;
    this._outAt = null;
    this._isAutoClosed = false;
  }

  private onCheckInWasDone(event: CheckInWasDone) {
    this._checkId = CheckId.fromString(event.id);
    this._inAt = event.inAt;
  }

  private onCheckOutWasDone(event: CheckOutWasDone) {
    this._checkId = CheckId.fromString(event.id);
    this._outAt = event.outAt;
  }
}
