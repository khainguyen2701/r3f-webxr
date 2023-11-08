import { useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useCustomAnimations } from '../../context/AnimationProvider';
import { ModelView } from '../until';

import { OrbitControls } from '@react-three/drei';
import { useHitTest, useInteraction, useXR } from '@react-three/xr';
import { useState } from 'react';
import KorriganWolf from '../Model/KorriganWolf';

const ModelViewFrame = (props) => {
  const { title } = useCustomAnimations();
  const ref = useRef();
  const reticleRef = useRef();

  const isPresent = useXR((state) => state.player);
  useThree(({ camera }) => {
    if (!isPresent) {
      camera.position.z = 3;
    }
  });

  const [object, setObject] = useState({
    position: { x: -3, y: -3, z: -3 },
    id: Date.now(),
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale,
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  useInteraction(reticleRef, 'onSelect', (event) => {
    const position = event?.intersection?.object.position.clone();
    const id = Date.now();
    setObject({
      position: {
        x: position?.x || 2,
        y: position?.y || 2,
        z: position?.z || 2,
      },
      id,
    });
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={ref} {...props}>
        {isPresent && <KorriganWolf position={object.position} />}
      </mesh>
      {/* <ModelView name={title} ref={ref} position={object.position} /> */}
      {isPresent && (
        <mesh rotation-x={-Math.PI / 2} ref={reticleRef}>
          <ringGeometry args={[0.1, 0.25, 32]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
      )}
    </>
  );
};

export default ModelViewFrame;
