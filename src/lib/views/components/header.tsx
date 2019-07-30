import React from 'react';
import { IViewProps } from '../../common/interfaces';
import { Navigation } from './navigation';

export const Header = (props: IViewProps) => (
  <header className='section'>
    <Navigation
      isLoggedin={props.isLoggedin}
    />
    {(() => {
      if (props.isLoggedin === true) {
        return (
        <div>


        </div>
        );
      }
    })()}
    <p>head component</p>
  </header>
);
