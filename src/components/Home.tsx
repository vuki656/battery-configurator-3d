import React from 'react'

import { Battery } from './Battery'
import { Scene } from './Scene'

export const Home = () => {
    return (
        <Scene>
            <Battery position={[-4, 0, 0]} />
            <Battery position={[0, 0, 0]} />
            <Battery position={[5, 0, 0]} />
        </Scene>
    )
}
