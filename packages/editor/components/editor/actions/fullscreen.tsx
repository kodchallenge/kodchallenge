import { EnterFullScreenIcon, ExitFullScreenIcon } from '@kod/icons'
import { Button } from '@kod/ui'
import React, { useEffect, useState } from 'react'
import { toggleFullscreen, onFullscreenChange } from '@kod/lib/services/fullscreen'
const Fullscreen = () => {
    const [isFullscreen, setIsFullScreen] = useState(false)

    useEffect(() => {
        onFullscreenChange(setIsFullScreen)
    }, [isFullscreen])

    return (
        <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => {
                toggleFullscreen()
            }}
            title={isFullscreen ? "Tam ekrandan çık" : "Tam ekran"}
        >
            {isFullscreen
                ? <ExitFullScreenIcon />
                : <EnterFullScreenIcon />
            }
        </Button>
    )
}

export default Fullscreen