"ues client";

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Code from "~/app/_components/mdx/Code";
import Pre from "~/app/_components/mdx/Pre";

function BitmapDrawer() {
    const [bitmap, setBitmap] = useState<boolean[][]>([[]])

    useEffect(() => {
        const matrix = []
        for (let y = 0; y < 8; y++) {
            const row = []
            for (let x = 0; x < 8; x++) {
                row.push(false)
            }
            matrix.push(row)
        }
        setBitmap(matrix)
    }, [])

    const matrixElements: JSX.Element[] = []
    bitmap.forEach((row, y) => {
        const rowElements: JSX.Element[] = []
        row.forEach((cell, x) => {
            rowElements.push(<Cell
                state={cell}
                bitmap={bitmap}
                setBitmap={setBitmap}
                coord={{ x, y }}
                key={`${x}${y}`} />
            )
        })
        matrixElements.push(<div className="flex" key={`row${y}`}>{rowElements}</div>)
    })

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-fit">
                {matrixElements}
            </div>
            <div className="[&>div]:w-fit w-fit">
                <Pre>
                    <Code>{getCppBitmap(bitmap)} </Code>
                </Pre>
            </div>
        </div>
    )
}
export default BitmapDrawer

function getCppBitmap(bitmap: boolean[][]) {
    let rows = ''
    bitmap.forEach(row => {
        rows += '\tB'
        row.forEach(cell => {
            if (cell) rows += '1'
            if (!cell) rows += '0'
        })
        rows += ',\n'
    })

    return `const byte bitmap[8] = { 
${rows}};`
}

type CellProps = {
    bitmap: boolean[][],
    setBitmap: Dispatch<SetStateAction<boolean[][]>>,
    coord: { x: number, y: number },
    state: boolean
}
function Cell({ bitmap, setBitmap, coord, state }: CellProps) {
    const [isActive, setActive] = useState(state)

    function HandleClick() {
        const newBitmap = [...bitmap]
        newBitmap[coord.y]![coord.x] = !isActive

        setActive(!isActive)
        setBitmap(newBitmap)
    }
    return <div
        onClick={HandleClick}
        className={`border border-primary w-12 h-12 cursor-pointer ${isActive ? "bg-h3" : ""}`}
    />
}
