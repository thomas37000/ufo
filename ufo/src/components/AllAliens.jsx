/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Api from '../api/api';
import Home from './Home';
import Card from './Card/Card';
import './Card/Card.css';
import './darkMode.css';

const AllAliens = (props, id) => {
  // ---------------------------------------------------------------------------
  // STATE CONTEXT
  // ---------------------------------------------------------------------------

  const [datas, setDatas] = useState([]);
  // ---------------------------------------------------------------------------
  // API CALL
  // ---------------------------------------------------------------------------
  useEffect(() => {
    axios.get(Api).then((res) => {
      // console.log(res.data);
      setDatas(res.data);
    });
  }, []);
  // const { cardById, id } = data;

  return (
    <>
      <Home />
      <div className='ufoGrid'>
        {datas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default AllAliens;
