import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Charm = (props) => {
  const [clicked, setClicked] = useState(true);

  return (
    <div className={clicked ? "hideCharm" : "displayCharm"} onClick={() => setClicked(!clicked)}>
      {props.message}
    </div>
  );
};

export default Charm;

Charm.propTypes = {
  txt: PropTypes.string,
};
