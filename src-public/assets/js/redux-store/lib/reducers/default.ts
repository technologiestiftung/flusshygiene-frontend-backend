import { DEFAULT } from './../action-types';
const def = (state: number = 0, action: any) => {
  switch (action.type) {
    case DEFAULT:
      return state + 1;
    default:
      return state;
  }
};

export default def;
