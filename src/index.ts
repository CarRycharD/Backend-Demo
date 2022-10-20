import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import morgan from 'morgan';
import { foodRouter } from './routes/Food';
import { tokenValidation } from './middleware/TokenValidation';
import { loginRouter } from './routes/Login';

const app = express();

app.use(morgan('common'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/food', tokenValidation, foodRouter);
app.use('/login', loginRouter);
app.use((req, res) => res.status(404).json({ message: 'not found' }));

const main = async (): Promise<void> => {
  await mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' }).then(() => {
    console.log('Connected to mongoDB.');
  });
  app.listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
};

main().catch(console.error);
