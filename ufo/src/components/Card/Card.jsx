import React from 'react';
import './Card.css';

export default function Card({data}) {
  
  const { image, name } = data;

  return (
    <div className='ufoContainer'>
      <div className='ufoCard'>
        <div><img src={image} alt="" /></div>
        <div>{name}</div>
      </div>
    </div>
  );
}
