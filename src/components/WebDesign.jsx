import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Reactlogo from "./Reactlogo";
import React from "react";

export const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Reactlogo />
      </Stage>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
};
