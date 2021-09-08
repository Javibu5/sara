import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { ProjectId } from '../../../project/domain/model/project-id';
import { UserId } from '../../../user/domain';
import { TaskId } from '../../domain/model/task-id';
import { TASKS,Tasks } from '../../domain/repository/task.repository';
import { RegisterTaskCommand } from './register-task.command';
import { RegisterTaskHandler } from './register-task.handler';

describe('RegisterTaskHandler', () => {
  let command$: RegisterTaskHandler;

  const tasks: Partial<Tasks> = {};

  const taskId = TaskId.fromString(uuid());
  const createdBy = UserId.fromString(uuid());
  const taskName = 'Tarea de prueba';
  const projectId = ProjectId.fromString(uuid());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegisterTaskHandler,
        {
          provide: TASKS,
          useValue: tasks,
        },
      ],
    }).compile();

    command$ = module.get<RegisterTaskHandler>(RegisterTaskHandler);

    tasks.find = jest.fn().mockResolvedValue(null);
  });

  it('should register a new task', async () => {
    await command$.execute(
      new RegisterTaskCommand(
        taskId.value,
        taskName,
        projectId.value,
        createdBy.value
      )
    );

    expect(tasks.save).toBeCalledTimes(1);
  });
});
