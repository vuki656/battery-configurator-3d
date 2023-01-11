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
            onPointerOut={() => {
                hover(false)
            }}
            onPointerOver={() => {
                hover(true)
            }}
            ref={ref}
        >
            <cylinderGeometry args={[1, 1, 3, 15]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
