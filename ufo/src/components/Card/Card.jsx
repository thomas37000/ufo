import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ data }) {
  const { id, image, name } = data;

  return (
    <div className='ufoContainer'>
      <Link to={`/alien/${id}`}>
        <div className='ufoCard'>
          <div>
            <img src={image} alt='' />
          </div>
          <div>{name}</div>
        </div>
      </Link>
    </div>
  );
}
