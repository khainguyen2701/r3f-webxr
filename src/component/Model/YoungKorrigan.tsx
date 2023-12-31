import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function YoungKorrigan(props) {
  const group = useRef();
  const { animations, scene } = useGLTF('/model/young.gltf');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]]?.fadeIn(0.5).play();
    actions[names[2]]?.fadeIn(0.5).play();
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position-x={props.position.x}
      position-y={props.position.y}
      position-z={props.position.z}
    >
      <group rotation={[0, 0.48, 0]} scale={3}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload('young.gltf');
