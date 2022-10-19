import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config'
import morgan from 'morgan';


const main = async (): Promise<void> => {

  const app = express();

  app.use(morgan('common'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority'})
  .then(() => {
    console.log ('Connected to mongoDB.');
  })
  .catch(error => {
    console.log('Unable to connect: ')
    console.log(error);
  })

  app.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong'}));

  app.use((req, res, next) => {
    const error = new Error('not found');
    console.log(error);

    return res.status(404).json({ message: error.message})
  })



  app.listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));

}

main().catch(console.error);
