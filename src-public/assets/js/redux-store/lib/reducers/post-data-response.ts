import { POST_DATA_RECEIVED } from '../action-types';

const responses = (state: object[] = [], action: any) => {
  switch (action.type) {
    case POST_DATA_RECEIVED:
    return [action.body, ...state];
    default:
    return state;
  }
};

export default responses;
