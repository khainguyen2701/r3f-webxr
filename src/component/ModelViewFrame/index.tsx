import React, { useRef, useState } from 'react';
import { ModelView } from '../until';
import { useFrame } from '@react-three/fiber';
import { useCustomAnimations } from '../../context/AnimationProvider';

const ModelViewFrame = (props) => {
  const { title } = useCustomAnimations();
  const ref = useRef();
  const keyMap = props.keyMap;
  const [selected, setSelected] = useState(props.selected);
  useFrame((_, delta) => {
    keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta);
    keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta);
    keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta);
    keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta);
  });
  return (
    <mesh ref={ref} {...props}>
      <ModelView name={title} ref={ref} onPointerDown={() => setSelected(!selected)} />
    </mesh>
  );
};

export default ModelViewFrame;
