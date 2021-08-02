import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path = require('path');

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = process.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isTest() {
    const mode = this.getValue('NODE_ENV', false);
    return mode === 'test';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    if (this.isTest()) {
      return {
        type: 'sqlite',
        database: path.join(__dirname, '../../../tmp/test.sqlite3'),
        dropSchema: true,
        entities: [
          path.join(__dirname, '../../../../apps/**/*.entity{.ts,.js}'),
        ],
        synchronize: true,
        autoLoadEntities: true,
        logging: false,
      };
    }

    return {
      type: 'mariadb',

      host: this.getValue('NODE_DB_HOST'),
      port: parseInt(this.getValue('NODE_DB_PORT')),
      username: this.getValue('NODE_DB_USER'),
      password: this.getValue('NODE_DB_PASSWORD'),
      database: this.getValue('NODE_DB_DATABASE'),

      migrationsTableName: 'migrations',

      entities: [path.join(__dirname, '../../../../apps/**/*.entity{.ts,.js}')],
      migrations: [path.join(__dirname, '../migrations/*{.ts,.js}')],

      cli: {
        migrationsDir: 'apps/api/src/migrations',
      },

      keepConnectionAlive: true,
      autoLoadEntities: true,
      synchronize: this.isTest(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'NODE_DB_HOST',
  'NODE_DB_PORT',
  'NODE_DB_USER',
  'NODE_DB_PASSWORD',
  'NODE_DB_DATABASE',
]);

export { configService };
