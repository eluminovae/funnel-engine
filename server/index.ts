import express, { Application } from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express(); 

app.use(cors());
app.use(express.json());

const PORT: number = parseInt(process.env.PORT || '5000', 10);

async function start(): Promise<void> {
  const dbUrl = process.env.DB_CONNECT;

  if (!dbUrl) {
    console.error('Критическая ошибка: DB_CONNECT не найден в .env');
    process.exit(1); 
  }

  try {
    await mongoose.connect(dbUrl);
    
    app.listen(PORT, () => {
      console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Ошибка при запуске:', error);
  }
}

start();