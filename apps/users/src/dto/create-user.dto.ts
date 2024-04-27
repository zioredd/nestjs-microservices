export class CreateUserDto {
  name: string;
  email: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT';
  courseId?: string;
}
