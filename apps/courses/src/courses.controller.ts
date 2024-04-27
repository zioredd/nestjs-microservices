import { Controller, Param, NotFoundException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CoursesService } from './courses.service';
import { HttpService } from '@nestjs/axios';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly httpService: HttpService,
  ) {}

  @MessagePattern({ cmd: 'get_courses' })
  async getAllCourses(@Param('id') id: string): Promise<any> {
    const courses = await this.coursesService.getAllCourses();
    if (!courses) {
      throw new NotFoundException('Course not found');
    }
    return courses;
  }
  @MessagePattern({ cmd: 'get_course_by_id' })
  async getCourseById(id: string): Promise<any> {
    const course = await this.coursesService.getCourseById(id);
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const creator = course.creator;
    const { data: teacher } = await this.httpService
      .get(`http://localhost:4000/users/${creator}`)
      .toPromise();
    return { course: course, creator: teacher };
  }
}
