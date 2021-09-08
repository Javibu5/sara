import { Injectable } from '@nestjs/common';
import { TaskDto } from '@sara/contracts';

import { TaskView } from '../read-model/schema/task.schema';

@Injectable()
export class TaskMapper {
  viewToDto(taskView: TaskView): TaskDto {
    const { _id: id, ...data } = taskView.toObject();

    return {
      id,
      ...data,
    };
  }
}
