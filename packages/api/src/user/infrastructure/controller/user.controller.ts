import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';

@Controller('users')
export class UsersController {

    users: UserDTO[] = [];

    @Get()
    getAllUsers(): UserDTO[] {
        return this.users;
    }

    @Get(':id')
    getUserById(@Param('id') id: string): UserDTO {
        const user = this.users.find(user => user.id == id);
        return user;
    }

    @Post()
    newUser(@Body() user: UserDTO): UserDTO {
        const newUser = {...user, id: ''+(this.users.length)}
        this.users = [...this.users, newUser];
        return newUser;
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() user: UserDTO): UserDTO {
        this.users = this.users.filter(user => user.id !== id);
        this.users = [...this.users, this.newUser(user)];
        return user;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        this.users = this.users.filter(user => user.id !== id);
    }

}