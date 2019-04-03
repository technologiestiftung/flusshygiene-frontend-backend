import React from 'react';
import {DefaultHeaderScripts} from './default-scripts';
import {DefaultStyles} from './default-styles';
interface IHead {
  title?: string;

}
export const Head = (props: IHead) => (
  <head>
    <title>{props.title !== undefined ? props.title : 'Flusshygiene'}</title>
    <DefaultStyles />
    <DefaultHeaderScripts />
  </head>
);
