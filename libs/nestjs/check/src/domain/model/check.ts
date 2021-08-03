import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { CheckInWasDone, CheckOutWasDone, CheckWasCreated } from '../event';
import { CheckId } from './check-id';
import { EmployeeId } from './employee-id';

export class Check extends AggregateRoot {
  private _checkId: CheckId;
  private _employeeId: EmployeeId;
  private _inAt?: Date;
  private _outAt?: Date;
  private _autoclosed: boolean;
  private _createdAt: Date;

  public static withCheckIn(
    checkId: CheckId,
    employeeId: EmployeeId,
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
    employeeId: EmployeeId,
    outAt: Date
  ): Check {
    const check = new Check();

    check.apply(
      new CheckWasCreated(checkId.value, employeeId.value, new Date())
    );

    check.checkOut(outAt);

    return check;
  }

  aggregateId(): string {
    return this.id.value;
  }

  get id(): CheckId {
    return this._checkId;
  }

  get employee(): EmployeeId {
    return this._employeeId;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get inAt(): Date | null {
    return this._inAt;
  }

  get outAt(): Date | null {
    return this._outAt;
  }

  get autoclosed(): boolean {
    return this._autoclosed;
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
    this._employeeId = EmployeeId.fromString(event.employeeId);
    this._inAt = null;
    this._outAt = null;
    this._autoclosed = false;
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
