import { Module } from '@nestjs/common';

import { ProjectId } from './domain/model/project-id';

@Module({ exports: [ProjectId] })
export class ProjectModule {}
