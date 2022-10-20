import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY, VALID_PASSWORD, VALID_USERNAME } from '../config/config';
import { Login } from '../interfaces';

const login = (req: Request, res: Response): void => {
  const { username, password } = req.body as Login;

  if (!username || !password) {
    res.status(401).json({
      error: 'Please provide username and password!',
    });
  }

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    res.status(401).json({
      error: 'invalid login credentials',
    });
  }

  const token = jwt.sign({ username, password }, SECRET_KEY, {
    expiresIn: '1h',
  });

  res.status(200).json({ token: token });
};

export { login };
