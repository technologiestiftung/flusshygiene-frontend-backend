
export const userInViews = () => (req: any, res: any, next: any) => {
  res.app.locals.user = req.user;
  next();
};
