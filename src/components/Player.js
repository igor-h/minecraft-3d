import { useFrame, useThree } from "@react-three/fiber"
import { userSphere, useSphere } from "@react-three/cannon"
import { Vector3 } from "three"
import { useEffect, useRef } from "react"

export const Player = () => {
    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1, 0]
    }))

    // Velocity
    const vel = useRef([0, 0, 0])
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    })

    // Position
    const pos = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe((p) => {
            console.log('position; ' +p);
            pos.current = p
        })
    }, [api.position])

    useFrame(() => {
        console.log('frame')
        camera.position.copy(new Vector3(
             pos.current[0],
             pos.current[1],
             pos.current[2]))
    })

    return (
        <mesh ref={ref}></mesh>
    )
}