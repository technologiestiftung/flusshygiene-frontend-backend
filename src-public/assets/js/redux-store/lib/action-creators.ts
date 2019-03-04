import { DEFAULT, GET_DATA, POST_DATA } from './action-types';

interface IAction {
  type: string;
}

interface IPostAction extends IAction {
  body: object;
}
export const triggerDefault = (): IAction => {
  return {type: DEFAULT};
};

export const getData = (): IAction => {
  return {type: GET_DATA};
};

export const postData = (body: object): IPostAction => {
  return {type: POST_DATA, body};
};
