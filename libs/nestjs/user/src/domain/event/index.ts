import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { CreateUserDto } from '@sara/contracts/user';

import {
  UserPasswordWasUpdated,
  UserPasswordWasUpdatedProps,
} from './user-password-was-updated.event';
import {
  UserRoleWasAdded,
  UserRoleWasAddedProps,
} from './user-role-was-added.event';
import {
  UserRoleWasRemoved,
  UserRoleWasRemovedProps,
} from './user-role-was-removed.event';
import { UserWasCreated } from './user-was-created.event';
import { UserWasDeleted } from './user-was-deleted.event';
import { UserWasLocked, UserWasLockedProps } from './user-was-locked.event';

export * from './user-password-was-updated.event';
export * from './user-role-was-added.event';
export * from './user-role-was-removed.event';
export * from './user-was-created.event';
export * from './user-was-deleted.event';
export * from './user-was-locked.event';


export const eventTransformers = {
  UserPasswordWasUpdated: (event: Event<UserPasswordWasUpdatedProps>) =>
    new UserPasswordWasUpdated(event.aggregateId, event.payload.password),
  UserRoleWasAdded: (event: Event<UserRoleWasAddedProps>) =>
    new UserRoleWasAdded(event.aggregateId, event.payload.role),
  UserRoleWasRemoved: (event: Event<UserRoleWasRemovedProps>) =>
    new UserRoleWasRemoved(event.aggregateId, event.payload.role),
  UserWasCreated: (event: Event<CreateUserDto>) =>
    new UserWasCreated(
      event.aggregateId,
      event.payload.username,
      event.payload.password,
      event.payload.name,
      event.payload.surname,
      event.payload.nid,
      event.payload.phoneNumber,
      event.payload.lock
    ),
  UserWasDeleted: (event: Event) => new UserWasDeleted(event.aggregateId),
  UserWasLocked: (event: Event<UserWasLockedProps>) =>
    new UserWasLocked(event.aggregateId, event.payload.lock),
};
