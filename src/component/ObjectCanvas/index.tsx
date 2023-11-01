import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Controllers, VRButton, XR } from '@react-three/xr';
import React from 'react';
import Background from '../Background';
import ModelViewFrame from '../ModelViewFrame';
import useKeyboard from '../hooks/useKeyBoard';

const ObjectCanvas = () => {
  const keyMap = useKeyboard();
  console.log('keyMap', keyMap);
  return (
    <>
      <VRButton />

      <Canvas camera={{ position: [2, 2, 2] }}>
        <Physics gravity={[0, -30, 0]}>
          <XR>
            <Controllers hideRaysOnBlur />
            {/* <Hands /> */}
            <ModelViewFrame keyMap={keyMap} />
          </XR>
        </Physics>

        <Background />
        <OrbitControls />
        <Stats />
        {/* <PointerLockControls /> */}
      </Canvas>
    </>
  );
};

export default ObjectCanvas;
