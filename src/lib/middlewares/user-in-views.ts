import express from 'express';

export const userInViews = () => (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.locals.user = req.user;
  next();
};
