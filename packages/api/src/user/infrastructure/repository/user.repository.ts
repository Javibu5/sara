import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entity/user.entity";
import { UserMapper } from "../user.mapper";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
            private userRepository: Repository<UserEntity>,
            private mapper: UserMapper
    ){};

    getUserByName(name: string): Promise<UserEntity> {
        return this.userRepository.findOne({ name });
    }

    getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    getUserById(id: string): Promise<UserEntity> {
        return this.userRepository.findOne(id);
    }

    newUser(userDTO: UserDTO): Promise<UserEntity> {
        const newUser = this.mapper.dtoToEntity(userDTO);
        return this.userRepository.save(newUser);
    }

    async updateUser(id: string, userDTO: UserDTO): Promise<UserEntity> {
        
        const updateUser = this.mapper.dtoToEntity(userDTO);
        await this.userRepository.update(id, updateUser);
        return this.userRepository.findOne(id);

    }

    deleteUser(id: string): Promise<DeleteResult> {
       return this.userRepository.delete(id);
    }

}

    
