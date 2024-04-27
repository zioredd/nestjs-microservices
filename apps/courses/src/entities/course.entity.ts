import { Schema, Document, model } from 'mongoose';

interface Lesson extends Document {
  lesson_number: string;
  title: string;
  description: string;
}

export interface Course extends Document {
  title: string;
  description: string;
  creator: string; //
  lessons: Lesson[];
}

export const courseSchema = new Schema<Course>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: String, required: true },
  lessons: { type: [Schema.Types.Array], required: true },
});

export const CourseModel = model<Course>('Course', courseSchema);
