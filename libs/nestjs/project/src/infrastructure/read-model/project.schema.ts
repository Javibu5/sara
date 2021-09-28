import { ProjectDto } from '@sara/contracts/project';
import { Schema } from 'mongoose';

export const PROJECT_PROJECTION = 'project';
export type ProjectDocument = ProjectDto & Document;

export const ProjecSchema = new Schema(
  {
    _id: String,
    name: String,
    description: String,
    deadline: Date,
    isDone: Boolean,
  },
  {
    versionKey: false,
  }
);
