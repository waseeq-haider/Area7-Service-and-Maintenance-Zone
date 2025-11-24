import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';
function FloorPlanMesh() {
    const texture = useLoader(THREE.TextureLoader, "/assets/Service & Maintenance Zone.png");

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[10, 6]} />
            <meshStandardMaterial
                map={texture}
                side={THREE.DoubleSide}
                metalness={0.1}
                roughness={0.8}
                color="#ffffff"
            />
        </mesh>
    );
}

export const FloorPlan = () => {
    return (
        <section className="py-12 px-6 bg-gradient-to-b from-secondary to-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-up">
                        3D Floor Plan
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                        Explore the Service & Maintenance Zone in 3D
                    </p>
                </div>

                <div className="w-full h-[420px] rounded-lg overflow-hidden shadow-2xl bg-background/50 backdrop-blur">
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 4, 6]} fov={50} />
                        <OrbitControls
                            enableZoom={true}
                            enablePan={true}
                            minPolarAngle={Math.PI / 6}
                            maxPolarAngle={Math.PI / 2}
                            minDistance={3}
                            maxDistance={12}
                        />

                        {/* Lighting */}
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <directionalLight position={[-10, 10, -5]} intensity={0.5} />
                        <pointLight position={[0, 5, 0]} intensity={0.5} />

                        {/* Floor Plan */}
                        <Suspense fallback={null}>
                            <FloorPlanMesh />
                        </Suspense>

                        {/* Ground plane for reference */}
                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                            <planeGeometry args={[16, 16]} />
                            <meshStandardMaterial
                                color="#2a2a2a"
                                transparent
                                opacity={0.3}
                            />
                        </mesh>
                    </Canvas>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Use your mouse to rotate, zoom, and explore the floor plan in 3D
                    </p>
                </div>
            </div>
        </section>
    );
};
