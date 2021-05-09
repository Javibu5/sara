module.exports = {
  type: 'mariadb',
  host: process.env.NODE_DB_HOST,
  port: process.env.NODE_DB_PORT,
  username: process.env.NODE_DB_USER,
  password: process.env.NODE_DB_PASSWORD,
  database: process.env.NODE_DB_DATABASE,
  migrationsTableName: 'migrations',
  migrations: ['/app/migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
  keepConnectionAlive: true,
  autoLoadEntities: true,
  synchronize: false,
};
