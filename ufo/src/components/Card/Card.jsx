import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ data }) {
  const { id, image, name } = data;

  return (
    <div className='ufoContainerGrid'>
      <Link to={`/alien/${id}`} className='ufoLink'>
        <div className='ufoCard'>
          <img src={image} alt='' />
          <div className='ufoLinkName'>{name}</div>
        </div>
      </Link>
    </div>
  );
}
