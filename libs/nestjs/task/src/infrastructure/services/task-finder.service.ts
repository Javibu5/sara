import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDto } from '@sara/contracts/task';
import { Model } from 'mongoose';

import { ITaskFinder } from '../../application';
import { TaskId } from '../../domain';
import { TaskDocument, TASKS_PROJECTION } from '../read-model';

@Injectable()
export class TaskFinder implements ITaskFinder {
  constructor(
    @InjectModel(TASKS_PROJECTION)
    private readonly tasks: Model<TaskDocument>
  ) {}
  async findAll(): Promise<TaskDto[]> {
    const tasks = await this.tasks.find().lean();

    return tasks.map((task) => new TaskDto(task));
  }

  async find(id: TaskId): Promise<TaskDto> {
    const task = await this.tasks.findById(id.value).lean();

    return new TaskDto(task);
  }
}
