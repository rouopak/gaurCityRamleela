import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { Om } from "./Om_symbol";

const OmModel = () => {
    const modelRef = useRef();

    useFrame((state) => {
        if (!modelRef.current) return;

        // Auto rotate about X axis slowly
        modelRef.current.rotation.y += 0.005;

        // Floating animation
        modelRef.current.position.y =
            -0.2 + Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
    });

    return (
        <group
            ref={modelRef}
            scale={0.6}
            position={[0, 0, 0]}
        >
            <Om />
        </group>
    );
};

const OMEx = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 14], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{
                antialias: false,
                powerPreference: "high-performance",
                alpha: true,
            }}
        >
            {/* Ambient Fill */}
            <ambientLight
                intensity={0.7}
                color="#fff1cc"
            />

            {/* Top Light */}
            <directionalLight
                position={[0, 4, -2]}
                intensity={2}
                color="#ffcc00"
            />

            {/* Front Light */}
            <directionalLight
                position={[0, -4, 17]}
                intensity={2.5}
                color="#ffea80"
            />

            {/* Side Rim Light */}
            <directionalLight
                position={[8, 2, 4]}
                intensity={1.5}
                color="#ff9900"
            />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
            />

            <OmModel />
        </Canvas>
    );
};

export default OMEx;