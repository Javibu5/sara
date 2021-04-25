import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Model } from "mongoose";

import { CHECK_MODEL,CheckView } from "../../infrastructure/read-model/schema/check.schema";
import { GetChecksTodayQuery } from "./get-checks-today.query";

@QueryHandler(GetChecksTodayQuery)
export class GetChecksTodayHandler implements IQueryHandler<GetChecksTodayQuery>{
    constructor(
        @Inject(CHECK_MODEL) private readonly checkModel: Model<CheckView>
    ) { }

    async execute(query: GetChecksTodayQuery): Promise<CheckView[]> {

        const start = new Date();
        start.setHours(0, 0, 0, 0);

        const end = new Date();
        end.setHours(23, 59, 59, 999);

        return this.checkModel.find({
            $and: [
                { employeeId: query.idUser },
                {
                    $or: [
                        { inAt: { $gte: start, $lt: end } },
                        { outAt: { $gte: start, $lt: end } }
                    ]
                }
            ]
        }
        )
            .sort({ inAt: -1, outAt: -1 })
            .exec();

    }
}