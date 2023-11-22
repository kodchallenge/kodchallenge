import fscreen from 'fscreen'

export const isFullscreen = () => fscreen.fullscreenElement !== null

export const toggleFullscreen = (element: HTMLElement = document.documentElement) => {
    if (isFullscreen()) {
        fscreen.exitFullscreen()
    } else {
        fscreen.requestFullscreen(element)
    }
}

export const onFullscreenChange = (callback: (isFullscreen: boolean) => void) => {
    fscreen.addEventListener('fullscreenchange', () => callback(isFullscreen()))
}

export const onFullscreenError = (callback: (error: Error) => void) => {
    fscreen.addEventListener('fullscreenerror', (event) => callback(event as any))
}

export const enterFullscreen = (element: HTMLElement = document.documentElement) => {
    fscreen.requestFullscreen(element)
}

export const exitFullscreen = () => {
    fscreen.exitFullscreen()
}