import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Womans from '../components/Genres/AliensWomans';
import Autre from '../components/Genres/AliensAutre';
import Mans from '../components/Genres/AliensMans';
import CardById from '../components/Card/CardById';
import NavRoute from '../components/Sidebar/NavRoute';
import AllAliens from '../components/AllAliens';
import ToggleContainer from './ToggleContainer';
import ufo from '../components/images/ufo.svg';

const Routter = () => {
  // createGlobalStyle permet de changer le CSS global comme un CONTEXT
  // il est le parent à la place de App.css

  const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  button {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

  // css dark mode Btn
  const lightTheme = {
    body: '#e2e2e2',
    text: '#363537',
    toggleBorder: '#fff',
    // background Btn
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  };

  const darkTheme = {
    body: 'linear-gradient(#313536, #15de27, #2a5f32, #15de27)',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    // background Btn
    gradient: 'linear-gradient(#313536,#2a5f32)',
  };

  const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';

    return (
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <img
          src='https://image.flaticon.com/icons/svg/1164/1164954.svg'
          width='224'
          height='224'
          alt='Sun free icon'
          title='Sun free icon'
        />
        <img
          src={ufo}
          width='224'
          height='224'
          alt='ufo free icon'
          title='ufo free icon'
        />
      </ToggleContainer>
    );
  };

  const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        setTheme('light');
        window.localStorage.setItem('theme', 'light');
      }
    };

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');

      if (localTheme) {
        setTheme(localTheme);
      } else {
        window.localStorage.setItem('theme', 'light');
      }
    }, []);

    return [theme, toggleTheme];
  };

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <NavRoute />
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path='/' component={AllAliens} />
          <Route path='/alien/:id' component={CardById} />
          <Route path='/aliens-femmes' component={Womans} />
          <Route path='/aliens-hommes' component={Mans} />
          <Route path='/aliens-autre-genres' component={Autre} />
        </Switch>
        <ScrollUpButton
          style={{
            backgroundColor: 'var(--green)',
            width: '40px',
            height: '40px',
            outline: 'none',
            transform: 'translateY(-3rem) translateX(1.5rem)',
          }}
        />
      </ThemeProvider>
    </Router>
  );
};

export default Routter;
