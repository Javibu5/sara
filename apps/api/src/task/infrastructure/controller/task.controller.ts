import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RegisterTaskDto, Role,TaskDto } from '@sara/contracts';

import { Roles } from '../../../auth/security/roles.decorator';
import { User } from '../../../auth/security/user.decorator';
import { UserView } from '../../../user/application';
import { RegisterTaskCommand } from '../../application/command/register-task.command';
import { GetTasksQuery } from '../../application/query/get-tasks.query';
import { TaskView } from '../read-model/schema/task.schema';
import { TaskMapper } from '../repository/task.mapper';

@ApiBearerAuth()
@Controller('tasks')
export class TaskController {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus,
    private taskMapper: TaskMapper
  ) {}

  @Post('registerTask')
  @Roles(Role.Admin)
  async registerTask(
    @Body() registerTaskDto: RegisterTaskDto,
    @User() user: UserView
  ): Promise<void> {
    await this.commandBus.execute(
      new RegisterTaskCommand(
        registerTaskDto.id,
        registerTaskDto.name,
        registerTaskDto.projectId,
        user.id
      )
    );
  }

  @Get()
  @Roles(Role.Admin)
  async findAll(@User() user: UserView): Promise<TaskDto[]> {
    const tasks = await this.queryBus.execute<GetTasksQuery, TaskView[]>(
      new GetTasksQuery(user.id)
    );

    return tasks.map(this.taskMapper.viewToDto);
  }
}
