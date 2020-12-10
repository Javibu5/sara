import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { UserEntity } from "../entity/user.entity";
import { UserService } from "../service/user.service";


@Crud({
    model: {
        type: UserEntity,
    },
})
@Controller("User")
export class UserController implements CrudController<UserEntity>{
    constructor(public service: UserService){}
}