import { useEffect, useLayoutEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../images/images'


const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])

    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard()

    useLayoutEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log
        }

        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if (pressedTexture) {
            setTexture(pressedTexture[0])
        }
    }, [setTexture, dirt, grass, glass, wood, log])

    useEffect(() => {
        // const visibleTimeout = setTimeout(() => {
        //     setVisible(false)
        // }, 200000)
        setVisible(true)
        return () => {
            // clearTimeout(visibleTimeout)
        }
    }, [activeTexture])

    return visible && (
        <div className="absolute centered texture-selector">
            {Object.entries(images).map(([k, src]) => {
                return (<img
                    key={k}
                    src={src}
                    alt={k}
                    className={`${k === activeTexture ? 'active' : 'inactive'}`}
                    />)
            })}
        </div>
    )
}