import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CheckDto } from '@sara/contracts/check';
import { Model } from 'mongoose';

import { ICheckFinder } from '../../application';
import { CheckId, EmployeeId } from '../../domain';
import { CheckDocument, CHECKS_PROJECTION } from '../read-model';

@Injectable()
export class CheckFinder implements ICheckFinder {
  constructor(
    @InjectModel(CHECKS_PROJECTION)
    private readonly checks: Model<CheckDocument>
  ) {}

  async findAll(): Promise<CheckDto[]> {
    const checks = await this.checks.find().lean();

    return checks.map((check) => new CheckDto(check));
  }

  async find(id: CheckId): Promise<CheckDto> {
    const check = await this.checks.findById(id.value).lean();

    return new CheckDto(check);
  }

  async findByUser(id: EmployeeId): Promise<CheckDto[]> {
    const checks = await this.checks.find({ employeeId: id.value }).lean();

    return checks.map((check) => new CheckDto(check));
  }

  async findByUserAndDate(id: EmployeeId, date: Date): Promise<CheckDto[]> {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    const checks = await this.checks
      .find({
        $and: [
          { employeeId: id.value },
          {
            $or: [
              { inAt: { $gte: start, $lt: end } },
              { outAt: { $gte: start, $lt: end } },
            ],
          },
        ],
      })
      .sort({ createdAt: -1 })
      .lean();

    return checks.map((check) => new CheckDto(check));
  }
}
