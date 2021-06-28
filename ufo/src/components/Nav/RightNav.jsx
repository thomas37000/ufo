import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    padding: 20px;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-style: normal;
    color: #262a2d !important;
  }
  a:hover {
    color: red !important;
  }

  .logoBurger {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: #f1f1f1;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: auto;
    width: 80%;
    padding-top: 5.5rem;
    text-align: center;

    .logoBurger {
      display: block;
      width: 75px;
      height: 75px;
      margin: auto;
      border-radius: 50%;
    }
  } ;
`;

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <li>
        <Link to='/aliens-femmes'>Aliens Femmes</Link>
      </li>
      <li>
        <Link to='/aliens-hommes'>Aliens Hommes</Link>
      </li>
      <li>
        <Link to='/aliens-autre-genres'>Aliens autre genres</Link>{' '}
      </li>
    </Slideburger>
  );
};

export default RightNav;
