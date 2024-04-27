import { Inject, Injectable, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('COURSES_SERVICE') private coursesClient: ClientProxy,
    @Inject('USERS_SERVICE') private usersClient: ClientProxy,
  ) {}

  async getAllCourses(): Promise<any> {
    return this.coursesClient.send({ cmd: 'get_courses' }, '').toPromise();
  }

  async getCourseById(id: any): Promise<any> {
    return this.coursesClient.send({ cmd: 'get_course_by_id' }, id).toPromise();
  }

  async getUsers(): Promise<any> {
    return this.usersClient.send({ cmd: 'get_users' }, '').toPromise();
  }
  async getUsersById(id: any): Promise<any> {
    return this.usersClient.send({ cmd: 'get_users_by_id' }, id).toPromise();
  }
}
