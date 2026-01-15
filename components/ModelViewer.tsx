"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { saira } from "@/lib/fonts";
import Footer from "@/components/Footer";

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);

  // Optional: auto-center + scale
  // You can remove this if you want manual positioning.
  gltf.scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      const mesh = obj as THREE.Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });

  return <primitive object={gltf.scene} position={[0, -1, 0]} />;
}

// Optional: prefetch
useGLTF.preload("/astroMech.glb");

export default function ModelViewer() {
  return (
    <div  style={{ width: "100%", height: "95vh" }}>

        <Card className="text-center flex flex-col items-center justify-center">
            <CardTitle >Interactive 3D Model Bellow</CardTitle>
            <CardContent className={saira.className}> Right click to drag to rotate the model</CardContent>
            <CardContent className={saira.className}> Right click and Shift to drag model around</CardContent>
            <CardContent className={saira.className}>
                <Image

                src={"/model3d.png"}
                width={300}
                height={300}
                alt=""



                />
            </CardContent>
        </Card>

      <Canvas
        shadows
        camera={{ position: [0, 5, 4], fov: 20 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          // Purple background (renderer clear color)
          gl.setClearColor(new THREE.Color("#5B21B6"), 1); // purple
        }}
      >
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />

        <Suspense fallback={null}>
          <Model  url="/astroMech.glb" />

          {/* Nice lighting environment (optional) */}
          <Environment preset="city" />
        </Suspense>

        {/* Orbit controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.8}
          makeDefault
        />
      </Canvas>
      <Footer/>
    </div>
  );
} 