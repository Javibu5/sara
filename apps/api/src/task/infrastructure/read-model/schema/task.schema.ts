import { Document, Schema } from 'mongoose';

export const TaskSchema = new Schema({
  _id: String,
  name: String,
  project: String,
  deadline: Date,
  isFinished: Boolean,
  employee: String,
  createdAt: Date,
  createdBy: String,
});

export interface TaskView extends Document {
  readonly _id: string;
  readonly name: string;
  readonly project: string;
  readonly deadline: Date;
  readonly isFinished: boolean;
  readonly employee: string;
  readonly createdAt: Date;
  readonly createdBy: string;
}

export const TASK_MODEL = 'TASK_MODEL';
