import { UserDto } from '@sara/contracts/user';
import { Document, Schema } from 'mongoose';

export const USERS_PROJECTION = 'users';

export type UserDocument = UserDto & Document;

export const UserSchema = new Schema(
  {
    _id: String,
    username: { type: String, index: { unique: true } },
    roles: [String],
    password: String,
    name: String,
    surname: String,
    phonenumber: String,
    nid: String,
    lock: Boolean,
  },
  {
    versionKey: false,
  }
);
