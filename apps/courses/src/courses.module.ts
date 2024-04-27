import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { courseSchema } from './entities/course.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/27017', { dbName: 'db' }),
    MongooseModule.forFeature([{ name: 'Course', schema: courseSchema }]),
    RedisModule.register({
      url: 'redis://localhost:6379',
    }),
    HttpModule,
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
