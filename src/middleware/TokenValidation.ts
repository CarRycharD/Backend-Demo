import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/Config';

const tokenValidation = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.headers.authorization) {
    next(res.status(401).json({ message: 'unauthorized' }));
  } else {
    const token = req.headers.authorization.split(' ')[1];
    if (req.headers.authorization?.startsWith('Bearer') && token) {
      try {
        jwt.verify(token, SECRET_KEY);
        next();
      } catch (error) {
        next(res.status(401).json({ message: 'unauthorized' }));
      }
    }
  }
};

export { tokenValidation };
