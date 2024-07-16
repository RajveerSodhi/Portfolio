import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Float, RoundedBox } from "@react-three/drei";

export default function WebGLElements() {
    return (
        <Canvas camera={{ near: 4, far: 12, fov: 80, position: [0, 0, -10] }}>
            <group position={[-8, 0, 0]}>
                <Float speed={2} rotationIntensity={1.5}>
                    <mesh position={[0, 3, 0]} scale={[0.7, 1.2, 0.7]}>
                        <coneGeometry />
                        <meshNormalMaterial />
                    </mesh>
                </Float>
                <Float speed={2} rotationIntensity={1.5}>
                    <mesh position={[-1, 0, 0]} scale={[0.8, 0.8, 0.8]}>
                        <sphereGeometry />
                        <meshNormalMaterial />
                    </mesh>
                </Float>
                <Float speed={2} rotationIntensity={1.5}>
                    <mesh position={[0, -3, 0]} scale={[0.5, 0.5, 0.5]}>
                        <torusKnotGeometry />
                        <meshNormalMaterial />
                    </mesh>
                </Float>
            </group>

            <group position={[8, 0, 0]}>
                <Float speed={2} rotationIntensity={1.5}>
                    <mesh position={[0, 3, 0]} scale={[0.7, 0.7, 0.7]}>
                        <torusGeometry />
                        <meshNormalMaterial />
                    </mesh>
                </Float>
                <Float speed={2} rotationIntensity={1.5}>
                    <RoundedBox args={[1.5, 1.5, 1.5]} radius={0.15} position={[1, 0, 0]}>
                        <meshNormalMaterial />
                    </RoundedBox>
                </Float>
                <Float speed={2} rotationIntensity={1.5}>
                    <mesh position={[0, -3, 0]} scale={[0.6, 1.8, 0.6]}>
                        <cylinderGeometry />
                        <meshNormalMaterial />
                    </mesh>
                </Float>
            </group>
        </Canvas>
    );
}
