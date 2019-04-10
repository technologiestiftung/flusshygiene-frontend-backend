import React from 'react';
import { IHead } from '../../common/interfaces';
import {DefaultHeaderScripts} from './default-scripts';
import {DefaultStyles} from './default-styles';

export const Head = (props: IHead) => (
  <head>
    <title>{props.title !== undefined ? props.title : 'Flusshygiene'}</title>
    <DefaultStyles />
    <DefaultHeaderScripts />
  </head>
);
