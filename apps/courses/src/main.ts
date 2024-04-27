import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CoursesModule } from './courses.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CoursesModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });
  await app.listen();
  console.log('courses microservice running');
}
bootstrap();
