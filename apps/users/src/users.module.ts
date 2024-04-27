import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisModule } from 'nestjs-redis';
import { userSchema } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/27017', { dbName: 'db' }),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    RedisModule.register({
      url: 'redis://localhost:6379',
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
