import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('courses')
  async getCourses(): Promise<any> {
    return this.appService.getAllCourses();
  }
  @Get('courses/:id')
  async getCoursesById(@Param('id') id: string): Promise<any> {
    return this.appService.getCourseById(id);
  }

  @Get('users')
  async getUsers(): Promise<any> {
    return this.appService.getUsers();
  }
  @Get('users/:id')
  async getUsersById(@Param('id') id: string): Promise<any> {
    return this.appService.getUsersById(id);
  }
}
