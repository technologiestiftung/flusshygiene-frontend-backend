import React from 'react';
import { RouteNames } from '../../common/enums';

export interface INavigationProps {
  isLoggedin: boolean;
}
/*
CSS hamburger toggle
taken from https://github.com/TinyJSDeveloper/bulma-css-burger
bulma-css-burger by TinyJSDeveloper

thank you @TinyJSDeveloper
*/
export const Navigation = (props: INavigationProps) => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <a className='navbar-item' href={`/${RouteNames.index}`}>
        <div>Flusshygiene/Badegewässer Logo</div>
      </a>
    </div>
    <input
      type='checkbox'
      role='button'
      id='navbar-burger-toggle'
      className='navbar-burger-toggle is-hidden'
      aria-label='menu'
      aria-expanded='false'
      data-target='navbarBasicExample'
    />

    <label htmlFor='navbar-burger-toggle' className='navbar-burger'>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </label>

    <div className='navbar-menu'>
      <div className='navbar-start'>
        <a href={`/${RouteNames.index}`} className='navbar-item'>
          Home
        </a>
        <a href={`/${RouteNames.questionnaire}`} className='navbar-item'>
          Standortbewertung
        </a>
        <a href={`/${RouteNames.info}`} className='navbar-item'>
          Vorhersage Modell
        </a>
      </div>
      <div className='navbar-end'>
        {(() => {
          if (props.isLoggedin === true) {
            return (
              <div className='navbar-item'>
                <div className='buttons'>
                  <button className='button is-light'>
                    <a href={`/${RouteNames.user}`}>Profil</a>
                  </button>
                  <button className='button is-light'>
                    <a className='' href={`/${RouteNames.logout}`}>
                      Log out
                    </a>
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className='navbar-item'>
                <div className='buttons'>
                  <a className='button is-primary is-hidden'>
                    <strong>Sign up</strong>
                  </a>
                  <a className='button is-light' href={`/${RouteNames.login}`}>
                    Log in
                  </a>
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  </nav>
);
