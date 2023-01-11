import type { MeshProps } from '@react-three/fiber'
import {
    useRef,
    useState,
} from 'react'

export const Battery = (props: MeshProps) => {
    const ref = useRef(null)

    const [hovered, hover] = useState(false)

    return (
        <mesh
            {...props}
            onPointerOut={(event) => {
                hover(false)
            }}
            onPointerOver={(event) => {
                hover(true)
            }}
            ref={ref}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}