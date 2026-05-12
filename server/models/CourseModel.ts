import { Schema, model } from "mongoose";
import { type Course } from "../types";

const CourseSchema = new Schema<Course>({
  courseCode: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  courseLang: {
    type: String,
    enum: ['en', 'de'],
    index: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  videoFileId: {
    type: String,
    required: false,
    index: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
    index: true
  },
}, {timestamps: true})

export const CourseModel = model<Course>('Course', CourseSchema)