import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Card.css';

export default function CardById() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://spaceprotectionalienapi.herokuapp.com/alien/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const { age, description, gender, image, location, name, species } = data;

  return (
    <div className='ufoContainer'>
      <div>
        <img src={image} alt='' />
      </div>
      <div>{name}</div>
      <div>{description}</div>
      <div>genre: {gender}</div>
      <div>{location}</div>
      <div>espèce: {species}</div>
      <div>{age}</div>
    </div>
  );
}
