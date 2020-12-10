import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {
    @ApiProperty()
    readonly id?: string;
    @ApiProperty()
    readonly name: string;

    readonly password: string

    constructor(id: string, name: string , password: string) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
}

