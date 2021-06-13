import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import logo from '../logo.svg';

const Nav = () => {
  return (
    <div>
      <header className='App-header'>
        <Link to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </header>
    </div>
  );
};

// Nav.propTypes = {

// };

export default Nav;
