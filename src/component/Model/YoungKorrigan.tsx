import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function YoungKorrigan(props) {
  const group = useRef();
  const { animations, scene } = useGLTF('/model/young.gltf');
  const { actions, names } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position-z={-1}>
      <group rotation={[0, 0.48, 0]} scale={3}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload('young.gltf');
