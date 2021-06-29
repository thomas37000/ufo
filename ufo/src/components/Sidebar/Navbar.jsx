import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../images/Alien.png';
import ufo from '../images/ufo2.svg';

const NavWrapper = styled.div`
  width: 100%;
  height: 7vh;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  color: var(--dark);

  .navRight {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .sidebarLogo,
  .logo {
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .logo {
    margin-left: 30px;
  }

  .sidebarLogo {
    margin: 0 20px;
    cursor: pointer;
  }
`;

const Navbar = ({ toggleMenu }) => {
  return (
    <NavWrapper>
      <Link to='/'>
        <img className='logo' src={logo} alt='menu' />
      </Link>
      <div className='navRight'>
        <div>click me {'->'} </div>
        <img
          className='sidebarLogo'
          src={ufo}
          alt='sidebar'
          onClick={() => toggleMenu(true)}
        />
      </div>
    </NavWrapper>
  );
};

export default Navbar;

Navbar.propTypes = {
  connected: PropTypes.string,
  connectedWithToken: PropTypes.string,
  toggleMenu: PropTypes.func,
};

Navbar.defaultProps = {
  connected: 'undefined',
  connectedWithToken: 'undefined',
  toggleMenu: 'undefined',
};
