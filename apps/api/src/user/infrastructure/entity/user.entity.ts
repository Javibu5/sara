import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { UserView } from '../../application';

@Entity('users')
export class UserEntity implements UserView {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 70,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'simple-array',
  })
  roles: string[];

  @Column({
    type: 'varchar',
    length: 70,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 70,
  })
  surname: string;

  @Column({
    type: 'varchar',
    length: 70,
  })
  nid: string;

  @Column({
    type: 'varchar',
    length: 9,
  })
  phonenumber: string;



  constructor(id: string, username: string, password: string, name:string, surname:string, nid:string, phonenumber: string, roles: string[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.surname= surname;
    this.nid = nid;
    this.phonenumber = phonenumber;
    this.roles = roles;
  }
}
