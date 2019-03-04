import { GET_DATA_RECEIVED } from '../action-types';
const data = (state: object[] = [], action: any) => {
  switch (action.type) {
    case GET_DATA_RECEIVED:
    return [action.body.data];
    default:
    return state;
  }
};

export default data;
