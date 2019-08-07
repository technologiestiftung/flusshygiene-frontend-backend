import express from 'express';

export const secured = () => (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (req.user) {
    return next();
  }
  req.session!.returnTo = req.originalUrl;
  res.redirect('/login');
};
