import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export default function KorriganWolf(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/model/model.gltf');
  const { names, actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null} position-z={-3} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/model/model.gltf');
