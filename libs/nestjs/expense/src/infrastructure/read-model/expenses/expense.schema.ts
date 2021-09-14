import { ExpenseDto } from '@sara/contracts/expense';
import { Document, Schema } from 'mongoose';

export const EXPENSES_PROJECTION = 'expenses';

export type ExpenseDocument = ExpenseDto & Document;

export const ExpenseSchema = new Schema(
  {
    _id: String,
  },
  {
    versionKey: false,
  }
);
