import { ApiProperty } from "@nestjs/swagger";

export class CheckDto{
    @ApiProperty()
    readonly _id! : string;
}