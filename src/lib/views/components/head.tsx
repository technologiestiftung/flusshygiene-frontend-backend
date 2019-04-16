import React from 'react';
import { IHead } from '../../common/interfaces';
import {DefaultHeaderScripts} from './default-scripts';
import {DefaultStyles} from './default-styles';

export const Head = (props: IHead) => (
  <head>
    <meta charSet='utf-8'></meta>
    <meta httpEquiv='x-ua-compatible' content='ie=edge'></meta>
    <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
    <title>{'Flusshygiene '}{props.title !== undefined ? ` | ${props.title}` : ''}</title>
    <DefaultStyles />
    <DefaultHeaderScripts />
  </head>
);
