import {useDrag} from '@use-gesture/react'
import {useSpring} from 'react-spring'

export default function useCtrlObj() {
  
    const Pos = useSpring({ x: 0, y: 0 })

    const moveObj = useDrag((params) => {
        Pos.x.set(params.offset[0])
        Pos.y.set(params.offset[1])

      })

    return { moveObj, Pos }
}
