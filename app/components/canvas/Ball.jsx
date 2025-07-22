'use client'
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef(null); // Fix 1: Provide null as initial value
  const [hovered, setHovered] = useState(false);

  // Animate the ball rotation based on hover state
  useFrame((state, delta) => {
    if (meshRef.current) {
      if (hovered) {
        // Rotate when hovered
        meshRef.current.rotation.x += delta * 2;
        meshRef.current.rotation.y += delta * 1.5;
      } else {
        // Smoothly return to original position when not hovered
        meshRef.current.rotation.x *= 0.95;
        meshRef.current.rotation.y *= 0.95;
      }
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh 
        ref={meshRef}
        castShadow 
        receiveShadow 
        scale={hovered ? 3 : 2.75}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        // Fix 2: Removed style prop as it's not supported on mesh elements
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // Fix 3: Removed flatShading from Decal as it's not a valid prop
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
