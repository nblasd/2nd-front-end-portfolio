"use client";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Contact() {
  return (
    <main className="h-screen">
      <Canvas>
        <spotLight position={[50, 50, 50]} />

        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </main>
  );
}
