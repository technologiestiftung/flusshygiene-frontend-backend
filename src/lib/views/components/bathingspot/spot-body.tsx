import React from 'react';

interface ISpotBody {
  children?: React.ReactNode;

}
export const SpotBody = (props: ISpotBody) => {
  return (
    <div>{props.children}</div>
  );
};
