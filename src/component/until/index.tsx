import React from 'react';
import KorriganWolf from '../Model/KorriganWolf';
import YoungKorrigan from '../Model/YoungKorrigan';
import AnkouWithCart from '../Model/AnkouWithCart';
import Druid from '../Model/Druid';

export const Models = [
  { title: 'Korrigan Wolf' },
  { title: 'Young Korriagan' },
  { title: 'Ankou With Cart' },
  { title: 'Druid' },
];

export const ModelView = (props) => {
  const current = {
    'Korrigan Wolf': <KorriganWolf />,
    'Young Korriagan': <YoungKorrigan />,
    'Ankou With Cart': <AnkouWithCart />,
    Druid: <Druid />,
  }[props.name];

  return (
    <mesh ref={props.ref} {...props}>
      {current}
    </mesh>
  );
};
