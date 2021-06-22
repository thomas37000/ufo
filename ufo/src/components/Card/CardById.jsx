/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdPlanet } from 'react-icons/io';
import { WiAlien } from 'react-icons/wi';
import './Card.css';

export default function CardById() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [caractere, csetCaractere] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://spaceprotectionalienapi.herokuapp.com/alien/${id}`)
      .then((response) => {
        setData(response.data);
        csetCaractere(response.data.personality);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const btnGender = data.gender;

  const genderAliens = () => {
    if (btnGender === 'F') {
      return (
        <button type='button' className='charmeFemale'>
          Charmez
        </button>
      );
    }
    if (btnGender === 'M') {
      return (
        <button type='button' className='charmeMale'>
          Charmez
        </button>
      );
    }
    if (btnGender === 'Autre') {
      return (
        <button type='button' className='charme'>
          Charmez
        </button>
      );
    }
  };

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
    <>
      <div className='ufoContainer'>
        <div className='ufoImg'>
          <img src={image} alt='' />
        </div>
        <div className='ufoDescription'>
          <div className='ufoName'>
            <h2>{name}</h2>
          </div>
          <div className='ufoAge'>
            <div className='ufoDesc'>
              <WiAlien className='alienIcon' />
              {age} <IoMdPlanet className='alienIcon' /> {location}
            </div>
          </div>
          <div>{description}</div>
          <div className='ufoDescType'>
            <div className='alienType'>genre: {gender}</div>
            <div className='alienType'>espèce: {species}</div>
          </div>
          <div className='ufoPersonality'>
            <div className='alienType'>personnalité(e): </div>
            <div className='allPersonality'>
              {caractere.map((data, id) => (
                <div>{data}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>{genderAliens()}</div>
    </>
  );
}
