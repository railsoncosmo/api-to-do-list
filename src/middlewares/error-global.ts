import { Request, Response, NextFunction } from 'express';
import { AppError } from '../error/AppError';

export const globalErrorHandler = (
  error: Error & Partial<AppError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal Server Error';
  return res.status(statusCode).json({ message });
};
