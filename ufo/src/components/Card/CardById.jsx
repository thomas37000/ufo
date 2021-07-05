/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { ParamsContext } from '../Context/ParamsContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdPlanet } from 'react-icons/io';
import { WiAlien } from 'react-icons/wi';
import Charm from './Charm';
import './Card.css';

export default function CardById(values) {
  const { states } = useContext(ParamsContext);

  const { id } = useParams();
  const [data, setData] = useState({});
  const [caractere, setCaractere] = useState([]);
  const [love, setLove] = useState(states.love);
  const [charm, setCharm] = useState(states.charm);
  // const [loading, setLoading] = useState(false);

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

  const toggleCharm = () => {
    setLove(!love);
    setCharm(!charm);
    // setTimeout(() => {
    //   setCharm(charm);
    // }, 4000);
    console.log(charm);
  };

  const errorMessage = () => {
    if (charm) {
      <div>{alert('vous avez déjà envoyé un charme !')}</div>;
    }
  };

  const displayMessage = () => {
    !charm ? toggleCharm() : errorMessage();
  };
  console.log(!charm);

  const Gender = data.gender;

  const btnCharm = document.getElementById('yo');

  const charmMe = () => {
    if (btnCharm) {
      btnCharm.addEventListener(
        'click',
        () => {
          console.log('test');
        },
        { once: true }
      );
    }
  };

  const genderAliens = () => {
    if (Gender === 'F') {
      return (
        <button
          id='yo'
          type='submit'
          className='charmeFemale'
          onClick={() => displayMessage()}
        >
          Charmez
        </button>
      );
    }
    if (Gender === 'M') {
      return (
        <button
          type='submit'
          className='charmeMale'
          onClick={() => displayMessage()}
        >
          Charmez
        </button>
      );
    }
    if (Gender === 'Autre') {
      return (
        <button
          type='submit'
          className='charme'
          onClick={() => displayMessage()}
        >
          Charmez
        </button>
      );
    }
  };

  const genderType = () => {
    if (Gender === 'F') {
      return <div className='alienType'>Genre: {gender}emale</div>;
    }
    if (Gender === 'M') {
      return <div className='alienType'>Genre: {gender}ale</div>;
    }
    if (Gender === 'Autre') {
      return <div className='alienType'>Genre: {gender}</div>;
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

  useEffect(() => {
    const charmStorage = 'false';
    console.log('default Charm state', JSON.stringify(charmStorage));
    localStorage.setItem('charm', JSON.stringify(charmStorage));

    const loveStorage = 'false';
    console.log('default Love state', JSON.stringify(loveStorage));
    localStorage.setItem('love', JSON.stringify(loveStorage));
  }, [charm, love]);

  return (
    <>
      <div className='ufoContainer'>
        <div className={charm ? 'displayCharm' : 'hideCharm'}>
          Votre charme a bien était envoyé à{' '}
          <span className='ufoNameCharm'>{name}</span>
        </div>
        <div className='ufoImg'>
          <img src={image} alt='' />
        </div>
        <div className='ufoDescription'>
          <div className='ufoHeader'>
            <div className='ufoName'>
              <h2>{name}</h2>
            </div>
            <div className={love ? 'heartLove' : 'heartByDefault'}>
              {toggleCharm}
            </div>
          </div>
          <div className='ufoAge'>
            <div className='ufoDesc'>
              <WiAlien className='alienIcon' />
              {age} <IoMdPlanet className='alienIcon' /> {location}
            </div>
          </div>
          <div>{description}</div>
          <div className='ufoDescType'>
            <div>{genderType()}</div>
            <div className='alienType'>Espèce: {species}</div>
          </div>
          <div className='ufoPersonality'>
            <div className='alienType'>Personnalité(e): </div>
            <div className='allPersonality'>
              {caractere.map((data, i) => (
                <div key={i}>{data}</div>
              ))}
            </div>
          </div>
          <div>{genderAliens()}</div>
        </div>
      </div>
    </>
  );
}
