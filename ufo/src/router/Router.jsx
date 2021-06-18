import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Womans from '../components/Genres/AliensWomans';
import Autre from '../components/Genres/AliensAutre';
import Mans from '../components/Genres/AliensMans';
import CardById from '../components/Card/CardById';
import NavBar from '../components/Nav/Navbar';
import GetApi from '../components/GetApi';

// import PropTypes from 'prop-types';

const Routter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={GetApi} />
        <Route path='/alien/:id' component={CardById} />
        <Route path='/aliens-femmes' component={Womans} />
        <Route path='/aliens-hommes' component={Mans} />
        <Route path='/aliens-autre-genres' component={Autre} />
      </Switch>
    </Router>
  );
};

// Router.propTypes = {

// };

export default Routter;
