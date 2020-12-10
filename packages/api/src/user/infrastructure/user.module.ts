import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controller/user.controller";
import { UserEntity } from "./entity/user.entity";
import { UserRepository } from "./repository/user.repository";
import { UserService } from "./service/user.service";
import { UserMapper } from "./user.mapper";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers:  [UserRepository, UserService, UserMapper],
    controllers: [UserController],
})
export class UserModule{}