import { useControls } from 'leva';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { Models } from '../component/until';

const AnimationsContext = createContext({
  animations: [],
  setAnimations: () => {},
  animationIndex: 0,
  setAnimationIndex: () => {},
  title: '',
});

const AnimationsProvider = (props) => {
  const options = useMemo(() => {
    return {
      title: {
        options: Models.map(({ title }) => title),
      },
      visible: true,
      color: { value: 'lime' },
    };
  }, []);

  const controls = useControls('Menu', options);

  const { title } = controls;

  const [animations, setAnimations] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <>
      <AnimationsContext.Provider
        value={{
          animations,
          setAnimations,
          animationIndex,
          setAnimationIndex,
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
