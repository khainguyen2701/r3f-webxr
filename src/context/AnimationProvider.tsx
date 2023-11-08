import { useControls } from 'leva';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { Models } from '../component/until';

const AnimationsContext = createContext({
  title: '',
});

const AnimationsProvider = (props) => {
  const options = useMemo(() => {
    return {
      title: {
        options: Models.map(({ title }) => title),
      },
    };
  }, []);

  const controls = useControls('Menu', options);

  const { title } = controls;

  return (
    <>
      <AnimationsContext.Provider
        value={{
          title,
        }}
      >
        {props.children}
      </AnimationsContext.Provider>
    </>
  );
};

export const useCustomAnimations = () => {
  return useContext(AnimationsContext);
};

export default AnimationsProvider;
