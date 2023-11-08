import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { ARButton, Controllers, XR } from '@react-three/xr';
import React from 'react';
import ModelViewFrame from '../ModelViewFrame';

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
            <Controllers />
            <ModelViewFrame />
          </XR>
        </Physics>

        <OrbitControls />
        <Stats />
      </Canvas>
    </>
  );
};

export default ObjectCanvas;
