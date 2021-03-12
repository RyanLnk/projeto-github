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

  // const newArr = state.organisations.map((item) => {
  //   return item.login;
  // });
  // console.log(newArr);

  return (
    <>
      {console.log(state.organisations)}
      <p>{state.nickname}</p>
      <p>{state.github_profile}</p>
      <ul>
        {state.organisations.map((item) => {
          <li key={item.login}>{item.login}</li>;
        })}
      </ul>
    </>
  );
};

export default Perfil;
