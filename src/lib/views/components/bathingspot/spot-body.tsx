import React from 'react';
import { ISpotBody } from '../../../common/interfaces';

export const SpotBody = (props: ISpotBody) => {
  return (
    <div>{props.children}</div>
  );
};
