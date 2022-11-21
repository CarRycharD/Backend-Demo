import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/Config';
import morgan from 'morgan';
import { foodRouter } from './routes/FoodRoute';
import { tokenValidation } from './middleware/TokenValidation';
import { loginRouter } from './routes/LoginRoute';
import cors from 'cors';

const main = async (): Promise<void> => {
  const app = express();
  app.options('*', cors());
  app.use(cors({ credentials: true }));
  app.use(morgan('common'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/api/v1/food', tokenValidation, foodRouter);
  app.use('/login', loginRouter);
  app.use((req, res) => res.status(404).json({ message: 'not found' }));

  await mongoose.connect(config.mongo.url).then(() => {
    console.log('Connected to mongoDB.');
  });
  app.listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
};

main().catch(console.error);
