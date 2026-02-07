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

  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

// Optional: prefetch
useGLTF.preload("/hoveRoid.glb");

export default function ModelViewer() {

  
  return (

     <div style={{ width: "100%", height: "100vh", marginBottom: "40px" }}>
           <Card className="text-center flex flex-col items-center justify-center">
              <CardTitle >Interactive 3D Model Bellow</CardTitle>
              <CardContent className={saira.className}> Left click to drag to rotate the model</CardContent>
              <CardContent className={saira.className}> Left click and Shift to drag model around</CardContent>
              <CardContent className={saira.className}>
                <Image

                  src={"/model3d2.png"}
                  width={300}
                  height={300}
                  alt=""



                />
              </CardContent>
           </Card>

            <Canvas
            shadows
            camera={{ position: [0, 2, 3], fov: 40 }}
            gl={{ 
                antialias: true,
                powerPreference: "default",
            }}
            onCreated={({ gl }) => {
                gl.setClearColor(new THREE.Color("#5B21B6"), 1);
              }}
            
            >

                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model url="/hoveRoid.glb" />
                </Suspense>
                <OrbitControls enableDamping dampingFactor={0.08} rotateSpeed={0.8} makeDefault/>
                <Environment preset="city" />
            </Canvas>
        </div>
    
    
  );
} 