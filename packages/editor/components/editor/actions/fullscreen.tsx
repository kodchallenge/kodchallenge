import { EnterFullScreenIcon } from '@kod/icons'
import { Button } from '@kod/ui'
import React from 'react'

const Fullscreen = () => {
    return (
        <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => {
                // const fullscreen = new FullScreenService()
                // isFullscreen
                //     ? fullscreen.exitFullscreen() :
                //     fullscreen.requestFullscreen(document.documentElement)
                // setIsFullscreen(!isFullscreen)
            }}
            title={"Tam ekran"}
        >
            <EnterFullScreenIcon />
        </Button>
    )
}

export default Fullscreen