import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<Course>,
  ) {}

  async getAllCourses(): Promise<Course[]> {
    const courses = this.courseModel.find().populate('_id').exec();
    return courses;
  }

  async getCourseById(id): Promise<any> {
    try {
      const course = await this.courseModel.findById(id).exec();
      return course;
    } catch (error) {
      throw new Error('Failed to fetch courses');
    }
  }

  async getCoursesById(id) {
    return id;
  }
}
