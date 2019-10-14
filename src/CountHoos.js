import React from 'react'
import { Button } from 'antd'
import useRandomColor from './hooks/useRandomColor'

function CountHoos() {
    const [color, changeColor] = useRandomColor('red')

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
                <div style={{ width: 500, height: 300, color: color }}></div>
                <Button onClick={() => changeColor}>changeColor</Button>
            </div>
        </div>
    )
}

export default CountHoos