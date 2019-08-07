import React from 'react';
import { ISpotBody } from '../../../common/interfaces/iviews';

export const SpotBody = (props: ISpotBody) => {
  return <div>{props.children}</div>;
};
