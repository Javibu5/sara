import { Document, Schema } from 'mongoose';
import { CreditCardDto } from '@sara/contracts/credit-card';

export const CREDITCARD_PROJECTION = 'creditCards';

export type CreditCardDocument = CreditCardDto & Document;

export const CreditCardSchema = new Schema(
  {
    _id: String,
    creditCardNumber: Number,
    isDeleted: Boolean,
  },
  { versionKey: false }
);