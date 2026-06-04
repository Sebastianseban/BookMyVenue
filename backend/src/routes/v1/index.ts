import { Router } from 'express';

export const v1Routes = Router();

v1Routes.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'BookMyVenue API v1',
  });
});
