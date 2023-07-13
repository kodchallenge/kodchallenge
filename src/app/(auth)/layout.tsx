"use client"
import { MainHeader } from '@/components/header'
import '../globals.css'

import { useScroll } from 'framer-motion'
import '@/assets/scss/kodchallenge.scss'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useRef } from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>(null)

  const mouseenterHandler = useCallback(
    function (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      ref.current?.style.setProperty('--mouse-x', e.clientX+"")
      ref.current?.style.setProperty(
        '--mouse-y',
        (e.clientY -25 + scrollY.get()) + "",
      )
    },
    [scrollY],
  )

  const mousemoveHandler = useCallback(
    function (e:any) {
      ref.current?.style.setProperty('--mouse-x', e.clientX)
      ref.current?.style.setProperty(
        '--mouse-y',
        (e.clientY - 25 + scrollY.get())+"",
      )
    },
    [scrollY],
  )

  const mouseleaveHandler = useCallback(function (e: any) {
    ref.current?.style.setProperty('--mouse-x', "-999")
    ref.current?.style.setProperty('--mouse-y', "-999")
  }, [])

  useEffect(() => {
    //@ts-ignore
    if (document && CSS && CSS.paintWorklet) {
      //@ts-ignore
      CSS.paintWorklet.addModule(
        `data:application/javascript;charset=utf8,${encodeURIComponent(`
  class MagnetMatrixPaintWorklet {
    static get inputProperties() { return ['--mouse-x', '--mouse-y', '--magnet-color', '--magnet-size', '--magnet-gap', '--magnet-radius']; }

    paint(ctx, size, props) {
      const mouseX = parseInt(props.get('--mouse-x'))
      const mouseY = parseInt(props.get('--mouse-y'))
      const color = props.get('--magnet-color')
      const lineWidth = parseInt(props.get('--magnet-size'))
      const gap = parseInt(props.get('--magnet-gap'))
      const radius = parseInt(props.get('--magnet-radius'))
      ctx.lineCap = "round";
      for (let i = 0; i * gap < size.width; i++) {
        for (let j = 0; j * gap < size.height; j++) {
          const posX = i * gap
          const posY = j * gap
          const distance = Math.sqrt(Math.pow(posX - mouseX, 2) + Math.pow(posY - mouseY, 2))
          const width = 0 // distance < radius ? (1 - distance / radius * distance / radius) * gap * 0.2 : 0
          const scale = distance < radius ? (1 - distance / radius * distance / radius) * gap * 0.15 : 1
          const startPosX = posX - width * 0.5
          const endPosX = posX + width * 0.5
          const rotate = Math.atan2(mouseY - posY, mouseX - posX)

          ctx.save()
          ctx.beginPath();
          ctx.strokeStyle = distance < radius ? 'hsl(var(--primary))' : color
          ctx.lineWidth = lineWidth;
          ctx.lineCap = "round";
          ctx.lineTo(endPosX, posY);
          ctx.scale(scale, scale)
          ctx.stroke()
          ctx.closePath()
          ctx.restore()
        }
      }
    }
  }

  registerPaint('magnet-matrix', MagnetMatrixPaintWorklet);
`)}`,
      )
    }
  }, [])

  return (
    <>
      <div 
      className={cn("dsot-points", "full-screen")}
      ref={ref}
      // className='min-h-full h-full w-full flex items-center justify-center'
      style={{
        //@ts-ignore
        '--magnet-color': 'hsl(var(--foreground))',
        '--magnet-size': '1',
        '--magnet-gap': '32',
        '--magnet-radius': '120',
        background: 'paint(magnet-matrix)',
        backgroundColor: 'transparent',
      }}
      onMouseEnter={mouseenterHandler}
      onMouseMove={mousemoveHandler}
      onMouseLeave={mouseleaveHandler}
      ></div>
      <main >
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
