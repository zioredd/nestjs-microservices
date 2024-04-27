import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UsersModule } from './users.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });
  await app.listen();
  console.log('users microservice running');
}
bootstrap();
