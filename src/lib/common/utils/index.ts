import { IObject } from '../interfaces';

export const measurementSort = (a: IObject, b: IObject) => {
  return (new Date(a.date) as unknown as number) - (new Date(b.date) as unknown as number);
};
