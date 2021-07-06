/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  CloseIcon,
  SidebarStyled,
  SidebarWrapper,
} from './SidebarStyledComponent';
import logo from '../images/Alien.png';
import './Sidebar.css';

const Sidebar = ({ show, setIsOpened }) => {
  return (
    <SidebarStyled show={show ? 1 : 0}>
      <SidebarWrapper>
        <CloseIcon
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <span />
        </CloseIcon>
        <div className='sidebarHome'>
          <Link to='/aliens'>
            <img className='logo' src={logo} alt='menu' />
          </Link>
        </div>
        <div className='sidebarLinks'>
          <Link to='/aliens-femmes'>Aliens Femmes</Link>
          <Link to='/aliens-hommes'>Aliens Hommes</Link>
          <Link to='/aliens-autre-genres'>Aliens autre genres</Link>
        </div>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
};
