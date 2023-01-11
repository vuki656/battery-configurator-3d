import React, { useState } from 'react'

import { Battery } from './Battery'
import { BatteryType } from './Home.types'
import { Scene } from './Scene'

export const Home = () => {
    const [batteries, setBatteries] = useState<BatteryType[]>([])

    const onClear = () => {
        setBatteries([])
    }

    const onBatteryRowAdd = () => {
        setBatteries((previousState) => {
            const lastBattery = previousState.at(-1) ?? {
                x: 0,
                y: 0,
                z: 0
            }

            return [
                ...previousState,
                ...[...new Array(5)].map((_, index) => {
                    return {
                        x: lastBattery.y + (index * 2),
                        z: lastBattery.z + 2,
                        y: lastBattery.y
                    }
                })
            ]
        })
    }

    return (
        <>
            <button onClick={onBatteryRowAdd}>Add Battery Row</button>
            <button onClick={onClear}>Clear</button>
            <Scene>
                {batteries.map((battery) => {
                    return (
                        <Battery
                            position={[
                                battery.x,
                                battery.y,
                                battery.z
                            ]}
                        />
                    )
                })}
            </Scene>
        </>
    )
}
