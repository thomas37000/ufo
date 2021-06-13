/* eslint-disable no-console */
import axios from 'axios';

function Api(onSuccess) {
  axios
    .get('https://spaceprotectionalienapi.herokuapp.com/alien')
    .then((res) => {
      onSuccess(res.data);
    });
}

export default Api;
