import { Controller, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'get_users' })
  async getUsers(@Param('id') id: string): Promise<any> {
    const users = this.usersService.getAllUsers();
    if (!users) {
      throw new NotFoundException('Users not found');
    }
    return users;
  }

  @MessagePattern({ cmd: 'get_users_by_id' })
  async getUserById(@Payload() id: string): Promise<any> {
    const users = await this.usersService.getUserById(id);
    if (!users) {
      throw new NotFoundException('Users not found');
    }
    return users;
  }
}
