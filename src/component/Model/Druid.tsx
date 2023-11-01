import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Druid(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/model/druid.gltf');
  const { actions, names } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position-z={-1}>
      <group scale={0.91}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload('/model/druid.gltf');
