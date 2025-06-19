import { Response } from 'express';
import logger from './logger';

export const handleError = (err: any, res: Response): void => {
  logger.error('Error:', err);

  if (err.name === 'ValidationError') {
    res.status(400).json({ 
      message: 'Validation error', 
      errors: Object.values(err.errors).map((e: any) => e.message) 
    });
    return;
  }

  if (err.name === 'MongoError' && err.code === 11000) {
    res.status(400).json({ message: 'Duplicate key error' });
    return;
  }

  if (err.name === 'CastError') {
    res.status(400).json({ message: 'Invalid ID format' });
    return;
  }

  // Handle other error types as needed

  // Default to 500 server error
  res.status(500).json({ message: 'Internal server error' });
};