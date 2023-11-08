import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useEffect } from 'react';

export default function KorriganWolf(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/model/model.gltf');
  const { names, actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]]?.fadeIn(0.5).play();
    actions[names[2]]?.fadeIn(0.5).play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={1.5}
      position-x={props.position.x}
      position-y={props.position.y}
      position-z={props.position.z}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/model/model.gltf');
