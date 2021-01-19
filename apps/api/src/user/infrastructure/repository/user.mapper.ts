import { Injectable } from '@nestjs/common';

import { Name, Nid, Password, PhoneNumber, Role, Surname, User, UserId, Username } from '../../domain';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserMapper {
  entityToAggregate(userEntity: UserEntity): User {
    const { id, username, password, roles, name, surname, nid, phonenumber } = userEntity;

    const user: User = Reflect.construct(User, []);
    Reflect.set(user, '_userId', UserId.fromString(id));
    Reflect.set(user, '_username', Username.fromString(username));
    Reflect.set(user, '_password', Password.fromString(password));
    Reflect.set(user, '_name' , Name.fromString(name));
    Reflect.set(user, '_surname' , Surname.fromString(surname));
    Reflect.set(user, '_nid' , Nid.fromString(nid));
    Reflect.set(user, '_phonenumber' , PhoneNumber.fromString(phonenumber));
  
    
    Reflect.set(
      user,
      '_roles',
      roles.map((role: string) => Role.fromString(role))
    );

    return user;
  }

  aggregateToEntity(user: User): UserEntity {
    const roles: Role[] = Reflect.get(user, '_roles');

    return new UserEntity(
      user.id.value,
      user.username.value,
      user.password.value,
      user.name.value,
      user.surname.value,
      user.nid.value,
      user.phonenumber.value,
      roles.map((role: Role) => role.value)
    );
  }
}
