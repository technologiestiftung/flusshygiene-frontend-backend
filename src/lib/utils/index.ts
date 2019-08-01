import { IObject } from '../common/interfaces';
import { auth } from '../auth';

export const measurementSort = (a: IObject, b: IObject) => {
  return (new Date(a.date) as unknown as number) - (new Date(b.date) as unknown as number);
};

export const startup = async () =>{
  try {
    const token = await auth();
    // console.log(token);
    return token;
  } catch (error) {
    throw error;
  }
}
