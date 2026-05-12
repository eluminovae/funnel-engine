import { Schema, model } from "mongoose";
import { type BotCommandMessage, type Button } from "../types";

const ButtonSchema = new Schema<Button>({
  text: {
    type: String,
    required: true
  },
  callbackData: {
    type: String,
    required: false,
    enum: ['msg_welcome', 'msg_choose_lang', 'msg_choose_level'], // TODO: дописать ключи и, возможно, переименовать
  },
  managerUserName: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  fileId: {
    type: String,
    required: false
  },
}, {_id: false});

const BotMessageSchema = new Schema<BotCommandMessage>({
  key: {
    type: String,
    required: true,
    index: true
  },
  targetCourse: {
    type: String,
    default: 'general',
    index: true
  },
  text: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
  },
  buttons: {
    type: [[ButtonSchema]],
    required: false,
    index: true
  },
}, {timestamps: true});

BotMessageSchema.index({key: 1, targetCourse: 1}, {unique: true});

export const BotMessageModel = model<BotCommandMessage>('BotMessage', BotMessageSchema);