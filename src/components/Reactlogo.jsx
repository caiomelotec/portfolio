/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 reactlogo.gltf --transform 
Files: reactlogo.gltf [124.21KB] > reactlogo-transformed.glb [40.32KB] (68%)
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/reactlogo-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["React-Logo_Material002_0"].geometry}
        material={materials["Material.002"]}
        position={[0, 0.079, 0.181]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.1}
      >
        <meshStandardMaterial color="rgb(23, 150, 200)" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/reactlogo-transformed.glb");