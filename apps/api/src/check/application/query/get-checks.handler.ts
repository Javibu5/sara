import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Model } from "mongoose";
import { CheckView, CHECK_MODEL } from "../../infrastructure/read-model/schema/check.schema";
import { GetChecksQuery } from "./get-checks.query";

@QueryHandler(GetChecksQuery)
export class GetChecksHandler implements IQueryHandler<GetChecksQuery>{

    constructor(
        @Inject(CHECK_MODEL) private readonly checkModel: Model<CheckView>
    ) { }


    async execute(query: GetChecksQuery): Promise<CheckView[]> {

        if (query.idUser === null) {
            return this.checkModel.find().exec();
        }

        return this.checkModel.find({ employeeId: query.idUser }).exec();
    }
}