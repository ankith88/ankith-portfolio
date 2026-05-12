import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Line } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { COLORS } from '../constants';

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 40;

  // Generate random positions for nodes
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  // Generate lines connecting nearby nodes
  const lines = useMemo(() => {
    const connections: [THREE.Vector3, THREE.Vector3][] = [];
    const maxDist = 4;
    
    for (let i = 0; i < count; i++) {
      const p1 = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      for (let j = i + 1; j < count; j++) {
        const p2 = new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        if (p1.distanceTo(p2) < maxDist) {
          connections.push([p1, p2]);
        }
      }
    }
    return connections.slice(0, 50); // Limit connections for performance
  }, [positions]);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth tilt based on mouse
    const targetRotationX = state.pointer.y * 0.15;
    const targetRotationY = state.pointer.x * 0.15;
    
    groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
    
    // Constant slow rotation
    groupRef.current.rotation.z += 0.0005;
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color={COLORS.primary}
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={COLORS.secondary}
          lineWidth={0.8}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      ))}
    </group>
  );
}

export default function NetworkBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, stencil: false, depth: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={[COLORS.background]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={COLORS.primary} />
        
        <Network />
        
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.2} 
            mipmapBlur 
            intensity={0.8} 
            radius={0.4}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}


