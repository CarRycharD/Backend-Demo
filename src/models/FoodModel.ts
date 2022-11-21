import mongoose, { Schema } from 'mongoose';
import { FoodEntryDetails, FoodEntry } from '../Interfaces';

const DetailsSchema: Schema = new Schema<FoodEntryDetails>(
  {
    unit: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  },
);

const FoodSchema: Schema = new Schema<FoodEntry>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: DetailsSchema,
      index: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  },
);

export default mongoose.model<FoodEntry>('Food', FoodSchema);
