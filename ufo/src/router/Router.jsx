import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import CardById from '../components/Card/CardById';
import GetApi from '../components/GetApi';
// import PropTypes from 'prop-types';

const Routter = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/' component={GetApi} />
        <Route path='/alien/:id' component={CardById} />
      </Switch>
    </Router>
  );
};

// Router.propTypes = {

// };

export default Routter;
