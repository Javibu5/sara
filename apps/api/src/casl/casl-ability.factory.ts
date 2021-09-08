import { FlatAttachedFile, FlatPost } from '@Acl/types';
import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { CheckDto, Role, UserDto } from '@sara/contracts';

import { Check } from '../check/domain/model/index';
import { User } from '../user/domain/model/index';
import { Action } from './enums/actions.enum';

type Subjects = typeof CheckDto | typeof UserDto | CheckDto | UserDto | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.roles.includes(Role.Admin)) {
      can(Action.MANAGE, 'all');
      can(Action.DELETE, CheckDto);
    } else {
      can(Action.READ, CheckDto);
    }

    can(Action.UPDATE, UserDto, { id: id });

    return build({
      detectSubjectType: (type) =>
        type.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
