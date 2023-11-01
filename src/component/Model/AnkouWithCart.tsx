import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function AnkouWithCart(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/model/akout.gltf');
  const { actions, names } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null} scale={0.5} position-z={-1}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/model/akout.gltf');
