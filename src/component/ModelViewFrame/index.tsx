import { useThree } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { useCustomAnimations } from '../../context/AnimationProvider';
import { ModelView } from '../until';

import { OrbitControls } from '@react-three/drei';
import { Interactive, useHitTest, useXR } from '@react-three/xr';

const ModelViewFrame = (props) => {
  const { title } = useCustomAnimations();
  const ref = useRef();
  const [models, setModels] = useState([]);

  const reticleRef = useRef();

  const isPresent = useXR();
  useThree(({ camera }) => {
    if (!isPresent) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale,
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={ref} {...props}>
        {isPresent && <ModelView name={title} ref={ref} />}
      </mesh>
      {isPresent && (
        <Interactive onSelect={(e) => console.log('e', e)}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={'white'} />
          </mesh>
        </Interactive>
      )}
    </>
  );
};

export default ModelViewFrame;
