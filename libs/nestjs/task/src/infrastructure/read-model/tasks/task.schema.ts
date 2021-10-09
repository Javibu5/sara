import { TaskDto } from '@sara/contracts/task';
import { Document, Schema } from 'mongoose';

export const TASKS_PROJECTION = 'tasks';

export type TaskDocument = TaskDto & Document;

export const TaskSchema = new Schema(
    {
        _id: String,
        name: String,
        projectId: String,
        deadline: Date,
        isFinished: Boolean,
        employees: [String],
    },
    {
        versionKey: false,
    }
);
