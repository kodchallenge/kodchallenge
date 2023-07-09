import React from 'react'

type ScrollCallback = (scroll: number) => void

const useScroll = (callback?: ScrollCallback, deps?: []) => {
const [scroll, setScroll] = React.useState(0)

    React.useEffect(() => {
        const listener = () => {
            setScroll(window.scrollY)
            callback?.(window.scrollY)
        }
        listener()
        window.addEventListener("scroll", listener)
        return () => {
            window.removeEventListener("scroll", listener)
        }
    }, deps || [])

    return scroll
}

export default useScroll