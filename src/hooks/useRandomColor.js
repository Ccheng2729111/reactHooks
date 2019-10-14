import { useState } from 'react'

const useRandomColor = (initColor) => {
    const colorsList = ['red', 'green', 'blue', 'black', 'pink', 'yellow']

    const [color, changeColor] = useState(initColor)

    return {
        color,
        getColor: () => {
            const colorsListLength = colorsList.length
            const index = Math.floor(Math.random() * colorsListLength);
            changeColor(colorsList[index])
        }
    }
}

export default useRandomColor