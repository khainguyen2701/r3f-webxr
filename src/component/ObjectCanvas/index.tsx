import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Controllers, ARButton, XR } from '@react-three/xr';
import React from 'react';
import Background from '../Background';
import ModelViewFrame from '../ModelViewFrame';
import useKeyboard from '../hooks/useKeyBoard';

const ObjectCanvas = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ['hit-test'],
          optionalFeatures: ['dom-overlay'],
        }}
      />

      <Canvas camera={{ position: [2, 2, 2] }}>
        <Physics gravity={[0, -30, 0]}>
          <XR>
            <ModelViewFrame />
          </XR>
        </Physics>

        <Background />
        <OrbitControls />
        <Stats />
      </Canvas>
    </>
  );
};

export default ObjectCanvas;
