import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entity/user.entity";
import { UserRepository } from "../repository/user.repository";
import { UserMapper } from "../user.mapper";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";



export class UserService extends TypeOrmCrudService<UserEntity>{
    constructor(
        @InjectRepository(UserEntity) repo,
        private userRepository: UserRepository
        ){
            super(repo)
        }

        async getUserByName(name: string): Promise<UserEntity> {
            return await this.userRepository.getUserByName(name);
        }
        
        

    
}