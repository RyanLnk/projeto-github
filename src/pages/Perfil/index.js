import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Perfil = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        'https://24pullrequests.com/users/turbo87.json',
      );
      setState(response.data);
    }
    getData();
  }, []);

  if (state === null) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">{state.nickname}</h1>
          <h4 className="center-align">
            <a href={state.github_profile} target="_blank">
              {state.github_profile}
            </a>
          </h4>
        </div>
      </div>

      <div className="row">
        {state.organisations.map((item) => (
          <div key={item.login}>
            <div className="col s4">
              <h2>{item.login}</h2>
              <img className="responsive-img" src={item.avatar_url} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfil;
