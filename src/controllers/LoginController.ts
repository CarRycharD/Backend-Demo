import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY, VALID_PASSWORD, VALID_USERNAME } from '../config/Config';
import { Login } from '../Interfaces';

const login = (req: Request, res: Response): void => {
  const { username, password } = req.body as Login;

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    res.status(401).json({
      error: 'invalid login credentials',
    });
  } else {
    const token = jwt.sign({ username, password }, SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ token: token });
  }
};

export { login };
