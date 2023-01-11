import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import type { SceneProps } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'

export const Scene = (props: SceneProps) => {
    const { children } = props

    return (
        <Canvas
            style={{
                alignItems: 'center',
                display: 'flex',
                height: '80%',
                justifyContent: 'center',
            }}
        >
            <ambientLight intensity={0.3} />
            <spotLight
                angle={0.15}
                penumbra={1}
                position={[10, 10, 10]}
            />
            <pointLight position={[-10, -10, -10]} />
            <OrbitControls minZoom={30} />
            <PerspectiveCamera
                makeDefault
                position={[-200, 100, -90]}
                fov={60}
                zoom={5}
            />
            {children}
        </Canvas>
    )
}
