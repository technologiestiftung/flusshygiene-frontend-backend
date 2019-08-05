import React from 'react';
import { IHead } from '../../common/interfaces/iviews';
import { DefaultHeaderScripts } from './default-scripts';
import { DefaultStyles } from './default-styles';

export const Head = (props: IHead) => (
  <head>
    <meta charSet='utf-8' />
    <meta httpEquiv='x-ua-compatible' content='ie=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='description' content=
      'Aktuelle Badegewässerqualität und Informationen rund um die Berliner Badestellen' />
    <link rel='apple-touch-icon'
      sizes='128x128' href='/assets/images/android-chrome-128x128.png' />
  <link rel='apple-touch-icon'
      sizes='180x180' href='/assets/images/apple-touch-icon.png' />
    <link rel='icon' type='image/png'
      sizes='32x32' href='/assets/images/favicon-32x32.png' />
    <link rel='icon' type='image/png'
      sizes='192x192' href='/assets/images/android-chrome-192x192.png' />
    <link rel='icon' type='image/png'
      sizes='256x256' href='/assets/images/android-chrome-256x256.png' />
    <link rel='icon' type='image/png'
      sizes='16x16' href='/assets/images/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='mask-icon' href='/assets/images/safari-pinned-tab.svg' color='#253276' />
    <meta name='apple-mobile-web-app-title' content='Berliner Badestellen' />
    <meta name='application-name' content='Berliner Badestellen' />
    <meta name='msapplication-TileColor' content='#253276' />
    <meta name='msapplication-TileImage' content='/assets/images/mstile-144x144.png' />
    <link type='text/plain' rel='author' href='/humans.txt' />
    <link rel='icon' type='image/x-icon' href='/assets/images/favicon.ico' />
  <link rel='shortcut icon' type='image/x-icon' href='/assets/images/favicon.ico' />
  <link rel='icon' type='image/png' href='/assets/images/favicon-32x32.png' />
    <meta name='theme-color' content='#253276' />

    <title>{'Flusshygiene '}{props.title !== undefined ? ` | ${props.title}` : ''}</title>
    <DefaultStyles />
    <DefaultHeaderScripts />
  </head>
);
