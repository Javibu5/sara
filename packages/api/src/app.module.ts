import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/infrastructure/user.module'; 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import config from './ormconfig';


@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({...config, 
                           keepConnectionAlive: true, 
                           autoLoadEntities: true}),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}