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

  .logo {
    display: flex;
    width: 35px;
    height: 35px;
    margin-left: 30px;
    border-radius: 50%;
  }
`;

const Navbar = ({ toggleMenu }) => {
  return (
    <NavWrapper>
      <Link to='/'>
        <img className='logo' src={logo} alt='menu' />
      </Link>

      <img
        className='logo'
        src={ufo}
        alt='sidebar'
        onClick={() => toggleMenu(true)}
      />
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
