import { Connection } from "mongoose";

import { DATABASE_CONNECTION } from "../../database/database.provider";
import { CHECKS } from "../domain/repository/checks";
import { CHECK_MODEL,CheckSchema } from "./read-model/schema/check.schema";
import { CheckRepository } from "./repository/check.repository";

export const CheckProviders =[
    {
        provide: CHECKS,
        useClass: CheckRepository,
    },
    {
        provide: CHECK_MODEL,
        useFactory: (connection : Connection) => connection.model('Check', CheckSchema),
        inject: [DATABASE_CONNECTION]
    }
]