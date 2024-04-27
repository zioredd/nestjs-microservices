import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COURSES_SERVICE',
        transport: Transport.REDIS,
        options: {
          // url: 'redis://localhost:6379',
          host: 'localhost',
          port: 6379,
        },
      },
      {
        name: 'USERS_SERVICE',
        transport: Transport.REDIS,
        options: {
          // url: 'redis://localhost:6379',
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
