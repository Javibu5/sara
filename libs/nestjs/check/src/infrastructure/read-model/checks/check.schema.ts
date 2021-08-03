import { CheckDto } from '@sara/contracts/check';
import { Document, Schema } from 'mongoose';

export const CHECKS_PROJECTION = 'checks';

export type CheckDocument = CheckDto & Document;

export const CheckSchema = new Schema(
  {
    _id: String,
    employeeId: String,
    inAt: Date,
    outAt: Date,
    isAutoClosed: Boolean,
    createdAt: Date,
  },
  {
    versionKey: false,
  }
);
