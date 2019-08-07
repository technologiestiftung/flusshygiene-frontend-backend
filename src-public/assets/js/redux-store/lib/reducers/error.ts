import { GET_DATA_ERROR, POST_DATA_ERROR } from '../action-types';

/**
 * Here we add all errors the the state
 * follow this function to the lib/root-reducer.js where it is added to the store
 * @param {Array} state
 * @param {Object} action
 */
const errors = (state: any[] = [], action: any) => {
  switch (action.type) {
    case GET_DATA_ERROR:
    case POST_DATA_ERROR:
      return [action.error, ...state];
    default:
      return state;
  }
};
export default errors;
