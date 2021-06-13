/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Api from '../api/api';

const GetApi = (props) => {
  // ---------------------------------------------------------------------------
  // STATE CONTEXT
  // ---------------------------------------------------------------------------

  const [items, setItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);

  // ---------------------------------------------------------------------------
  // API CALL
  // ---------------------------------------------------------------------------  
  useEffect(() => {
    axios.get(Api).then((res) => {
      console.log(res.data);
      setItems(res.data);
    });
  }, []);


  const { children } = props;

  return (
    <div>eeee</div>
  );
};


export default GetApi;
