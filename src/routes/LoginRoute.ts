import express from 'express';
import { login } from '../controllers/LoginController';

const loginRouter = express.Router();

loginRouter.route('/').post(login);

export { loginRouter };
