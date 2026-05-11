// КОЛЛЕКЦИИ В MONGODB
export interface User { // Примеры:
  telegramID: number; // 74724...
  userName?: string; // @username
  firstName: string; // John Doe
  enrolledCourses: string[]; // ['en', 'de']
  currentStep: string; // 'wait_video' | 'test_audio' и т.д.
  selectedLanguage: string; // 'de'
}

export interface Course {
  courseCode: string; // 'en'
  title: string; // 'English Premium'
  description: string; // 'Это самый лучший курс для изучения англ языка'
  videoFileId: string; // file.id (?) медиа в серверах Телеграм
  isActive: boolean; // true (чтобы быстро можно было скрыть курс)
}

export interface Button {
  text: string; // 'Забрать подарок'
  callbackData?: string; // msg_choose_level
  managerUserName?: string; // вдруг понадобится связь с человеком
  url?: string;
  fileId?: string;
}

export interface BotCommandMessage {
  key: string; // msg_welcome
  text: string // 'Привет! Твой подарок - PDF «Топ-100 фраз для выживания за границей»'
  descr: string; // Описание команды бота для разработчика
  buttons?: Button[][]; // ['Забрать подарок']
}