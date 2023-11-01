import { Environment } from '@react-three/drei';
import React from 'react';

const Background = () => {
  return <Environment files="/model/st_peters_square_night_4k.hdr" background />;
};

export default Background;
