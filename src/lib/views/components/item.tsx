import React from 'react';
interface IItem {
  str: string;
}
export const Item = (props: IItem) => (
  <div>
    <p>{props.str}</p>
  </div>
);
