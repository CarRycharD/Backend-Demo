import express from 'express';
import { login } from '../controllers/Login';

const loginRouter = express.Router();

loginRouter.route('/').post(login);

export { loginRouter };
