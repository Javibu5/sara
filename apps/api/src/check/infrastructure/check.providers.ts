import { CHECKS } from "../domain/repository/checks";
import { CheckRepository } from "./repository/check.repository";

export const CheckProviders =[
    {
        provide: CHECKS,
        useClass: CheckRepository,
    },
]