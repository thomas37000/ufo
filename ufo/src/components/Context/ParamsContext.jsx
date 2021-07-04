/* eslint-disable no-console */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ParamsContext = createContext(null);

const ParamsContextProvider = (props) => {
  const { id } = useParams();
  const [setData] = useState({});
  const [setCaractere] = useState([]);
  const [love, setLove] = useState(localStorage.getItem('love', false));
  const [charm, setCharm] = useState(localStorage.getItem('charm', false));

  useEffect(() => {
    axios
      .get(`https://spaceprotectionalienapi.herokuapp.com/alien/${id}`)
      .then((response) => {
        setData(response.data);
        setCaractere(response.data.personality);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
