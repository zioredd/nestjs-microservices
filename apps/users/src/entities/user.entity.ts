import mongoose, { Schema, Document, model } from 'mongoose';

export interface User extends mongoose.Document {
  name: string;
  email: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT';
  courseId: string;
}

export const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  courseId: String,
});

export const UserModel = model<User>('Course', userSchema);
