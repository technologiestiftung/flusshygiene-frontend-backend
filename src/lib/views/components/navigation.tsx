import React from 'react';
/*
CSS hamburger toggle
taken from https://github.com/TinyJSDeveloper/bulma-css-burger
bulma-css-burger by TinyJSDeveloper

thank you @TinyJSDeveloper
*/
export const Navigation = () => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <a className='navbar-item' href='/'>
        <div>Flusshygiene/Badegewässer Logo</div>
      </a>
    </div>
    <input type='checkbox' role='button' id='navbar-burger-toggle' className='navbar-burger-toggle is-hidden'
      aria-label='menu' aria-expanded='false' data-target='navbarBasicExample' />

    <label htmlFor='navbar-burger-toggle' className='navbar-burger'>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </label>

    <div className='navbar-menu'>
      <div className='navbar-start'>
        <a href='/' className='navbar-item'>Home</a>
        <a href='/' className='navbar-item'>Umfrage</a>
      </div>
    </div>
  </nav>
);