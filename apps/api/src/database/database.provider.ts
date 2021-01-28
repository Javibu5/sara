import { Connection, createConnection } from 'mongoose';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const DatabaseProvider = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<Connection> =>
      await createConnection('mongodb://localhost:27017/sara', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
  }
];
