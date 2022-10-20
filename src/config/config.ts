import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';
const VALID_USERNAME: string = process.env.VALID_USERNAME || '';
const VALID_PASSWORD: string = process.env.VALID_PASSWORD || '';
const SECRET_KEY: string = process.env.SECRET_KEY || '';

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

export const config = {
  mongo: {
    url: MONGO_URI,
  },
  server: {
    port: SERVER_PORT,
  },
};

export { VALID_USERNAME, VALID_PASSWORD, SECRET_KEY };
