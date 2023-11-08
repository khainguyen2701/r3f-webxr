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
    'Korrigan Wolf': <KorriganWolf position={props.position} />,
    'Young Korriagan': <YoungKorrigan position={props.position} />,
    'Ankou With Cart': <AnkouWithCart position={props.position} />,
    Druid: <Druid position={props.position} />,
  }[props.name];

  return (
    <mesh ref={props.ref} {...props}>
      {current}
    </mesh>
  );
};
