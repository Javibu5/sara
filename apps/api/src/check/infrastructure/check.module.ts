import { Module } from "@nestjs/common";
import { UserModule } from "../../user/infrastructure";
import { UserService } from "../../user/infrastructure/services/user.service";

@Module({
    controllers: [],
    imports:[UserModule],
    providers:[UserService],
})
export class CheckModule {}