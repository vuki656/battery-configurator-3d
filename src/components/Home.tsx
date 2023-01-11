import React, { useState } from 'react'

import { Battery } from './Battery'
import type { BatteryType } from './Home.types'
import { Scene } from './Scene'

const BATTERY_X_DISTANCE = 2
const BATTERY_Z_DISTANCE = 2
const BATTERY_Y_DISTANCE = 4

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
                z: 0,
            }

            return [
                ...previousState,
                ...[...new Array(30)].map((_, index) => {
                    return {
                        x: index * BATTERY_X_DISTANCE,
                        y: lastBattery.y,
                        z: lastBattery.z + BATTERY_Z_DISTANCE,
                    }
                }),
            ]
        })
    }

    const onBatteryStackAdd = () => {
        setBatteries((previousState) => {
            return [
                ...previousState,
                ...previousState.map((battery) => {
                    return {
                        ...battery,
                        y: battery.y + BATTERY_Y_DISTANCE,
                    }
                }),
            ]
        })
    }

    return (
        <>
            <button onClick={onBatteryRowAdd}>
                Add Battery Row
            </button>
            <button
                disabled={batteries.length === 0}
                onClick={onBatteryStackAdd}
            >
                Add Battery Stack
            </button>
            <button onClick={onClear}>
                Clear
            </button>
            <Scene>
                {batteries.map((battery, index) => {
                    return (
                        <Battery
                            key={JSON.stringify(battery) + index}
                            position={[
                                battery.x,
                                battery.y,
                                battery.z,
                            ]}
                        />
                    )
                })}
            </Scene>
        </>
    )
}
