import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Card.css';

export default function CardById() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [caractère, setCaractère] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://spaceprotectionalienapi.herokuapp.com/alien/${id}`)
      .then((response) => {
        setData(response.data);
        setCaractère(response.data.personality);
        setLoading(false);
        // console.log(personality);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const {
    age,
    description,
    gender,
    image,
    location,
    name,
    personality,
    species,
  } = data;

  return (
    <div className='ufoContainer'>
      <div className='ufoImg'>
        <img src={image} alt='' />
      </div>
      <div className='ufoDescription'>
        <div className='ufoName'>
          <h2>{name}</h2>
        </div>
        <div>{description}</div>
        <div>genre: {gender}</div>
        <div>ville: {location}</div>
        <div>espèce: {species}</div>
        <div>âge: {age}</div>
        <div className='ufoPersonality'>
          personnalité(e):
          {caractère.map((c) => {
            return (
              <p>
                <li key={c.id}>{personality.join(' / ')}</li>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
