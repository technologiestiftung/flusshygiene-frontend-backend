import { combineReducers } from 'redux';
import def from './reducers/default';
import errors from './reducers/error';
import data from './reducers/get-data';
import responses from './reducers/post-data-response';
const reducers = combineReducers({
  data,
  def,
  errors,
  responses,
});
export default reducers;
