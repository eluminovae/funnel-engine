import { Schema, model } from 'mongoose';
import { type User } from '../types';

const UserSchema = new Schema<User>({
  telegramID: {
    type: Number, 
    required: true, 
    unique: true,
    index: true
  },
  userName: {
    type: String, 
    required: false,
    index: true
  },
  firstName: {
    type: String, 
    required: true,
    index: true
  },
  enrolledCourses: {
    type: [String], 
    required: true, 
    default: [],
    index: true
  }, 
  currentStep: {
    type: String, 
    required: true, 
    enum: ['msg_welcome', 'choose_lang'], // TODO: дополнить
    default: 'msg_welcome',
    index: true
  },
  selectedLanguage: {
    type: String, 
    required: false,
    index: true
  }
}, {timestamps: true}) 

export const UserModel = model<User>('User', UserSchema)