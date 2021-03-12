import axios from 'axios';
import './index.css';
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
    <>
      <div className="container">
        <div className="row col-12 text-center">
          <h1>{state.nickname}</h1>
          <p>
            <a href={state.github_profile} target="_blank">
              <span className="text-secondary">{state.github_profile}</span>
            </a>
          </p>
        </div>

        <div className="row">
          {state.organisations.map((item) => (
            <div
              key={item.login}
              className="col-4 border border-1 rounded text-center"
            >
              <h2>{item.login}</h2>
              <a href={item.link} target="_blank">
                <img
                  className="rounded mx-auto d-block w-25 p-3"
                  src={item.avatar_url}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Perfil;
