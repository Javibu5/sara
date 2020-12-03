import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/infrastructure/user.module'; 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './ormconfig';


@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({...config, 
                           keepConnectionAlive: true, 
                           autoLoadEntities: true}),
    UserModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}