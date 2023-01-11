import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

import { Battery } from './Battery'

export const Home = () => {
    return (
        <Canvas
            style={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
            }}
        >
            <ambientLight intensity={0.5} />
            <spotLight
                angle={0.15}
                penumbra={1}
                position={[10, 10, 10]}
            />
            <pointLight position={[-10, -10, -10]} />
            <Battery position={[-1.2, 0, 0]} />
            <Battery position={[1.2, 0, 0]} />
            <OrbitControls />
        </Canvas>
    )
}
