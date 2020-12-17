import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./controller/user.controller";
import { UserEntity } from "./entity/user.entity";
import { UserRepository } from "./repository/user.repository";
import { UserService } from "./service/user.service";
import { UserMapper } from "./user.mapper";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers: [ UserService, UserMapper, UserRepository],
    exports: [UserService]
  })
  export class UserModule {}