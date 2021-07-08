/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ParamsContext = createContext(null);

const ParamsContextProvider = (props) => {
  const getCharm = window.localStorage.getItem('charm');
  // console.log('stringify state charm', getCharm);
  const parseCharm = JSON.parse(getCharm) === false;
  // console.log('getCharm parse: ', parseCharm);

  const getLove = window.localStorage.getItem('love');
  // console.log('stringify state love', getCharm);
  const parseLove = JSON.parse(getLove) === false;
  // console.log('getLove parse: ', parseLove);

  const [love, setLove] = useState(parseLove);
  const [charm, setCharm] = useState(parseCharm);

  // const [charm, setCharm] = useState(window.localStorage.getItem('charm'));
  // const [love, setLove] = useState(window.localStorage.getItem('love'));

  // const localCharm = window.localStorage.getItem('charm');
  // const localLove = window.localStorage.getItem('love');

  const states = useMemo(
    () => ({
      function: {
        setCharm,
        setLove,
      },
      charm,
      love,
    }),
    [charm, love]
  );

  const { children } = props;

  return (
    <ParamsContext.Provider value={{ states }}>
      {children}
    </ParamsContext.Provider>
  );
};

ParamsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ParamsContextProvider;
