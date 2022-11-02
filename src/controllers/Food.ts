import { NextFunction, Request, Response } from 'express';
import Food from '../models/Food';
import { FoodEntryCreateOptions, FoodEntryUpdateOptions, FoodEntry } from '../interfaces';

export const createFood = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const food: FoodEntryCreateOptions = req.body as FoodEntryCreateOptions;
    const newFood: FoodEntry = await Food.create(food);
    res.status(200).json({ newFood: newFood });
  } catch (error) {
    next(res.status(500).json({ error: 'internal server error' }));
  }
};

export const readFood = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const food: FoodEntry | null = await Food.findById(req.params.id);
    res.status(200).json({ food: food });
  } catch (error) {
    next(res.status(500).json({ error: 'internal server error' }));
  }
};

export const readAllFood = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const foods: FoodEntry[] = await Food.find({});
    res.status(200).json({ foods: foods });
  } catch (error) {
    next(res.status(500).json({ error: 'internal server error' }));
  }
};

export const updateFood = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updateFood: FoodEntryUpdateOptions = req.body as FoodEntryUpdateOptions;
    const updatedFood: FoodEntry | null = await Food.findByIdAndUpdate(req.params.id, updateFood, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ foods: updatedFood });
  } catch (error) {
    next(res.status(500).json({ error: 'internal server error' }));
  }
};

export const deleteFood = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const food: FoodEntry | null = await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({ food: food });
  } catch (error) {
    next(res.status(500).json({ error: 'internal server error' }));
  }
};
