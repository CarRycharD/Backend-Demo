import express from 'express';
import { readAllFood, readFood, createFood, updateFood, deleteFood } from '../controllers/Food';

const foodRouter = express.Router();

foodRouter
  .route('/')
  .get(readAllFood)
  .post(createFood);
foodRouter
  .route('/:id')
  .get(readFood)
  .put(updateFood)
  .delete(deleteFood);

export { foodRouter };
