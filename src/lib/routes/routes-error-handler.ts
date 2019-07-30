export const routeErrorHandler: (route: string, error: Error) => void = (route, error) => {
  if (process.env.NODE_ENV === 'development') {
    console.trace(error);
    console.error('Error on route: ', route);
    console.error('Error: name', error.name);
    console.error('Error: message', error.message);
    console.error('Error: stack', error.stack);
    throw error;
  } else {
    console.log(error);
  }
};
