import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function AnkouWithCart(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/model/akout.gltf');
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[0]]?.fadeIn(0.5).play();
    actions[names[2]]?.fadeIn(0.5).play();
  });
  return (
    <group ref={group} {...props} dispose={null} scale={0.5}>
      <primitive object={scene} position={props.position} />
    </group>
  );
}

useGLTF.preload('/model/akout.gltf');
