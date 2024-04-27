import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAllUsers() {
    try {
      const user = await this.userModel.find().exec();
      return user;
    } catch (error) {
      throw new Error('Failed to fetch courses');
    }
  }

  async getUserById(id: string): Promise<any> {
    try {
      const user = await this.userModel.findById(id).exec();
      return user;
    } catch (error) {
      throw new Error('Failed to fetch courses');
    }
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
