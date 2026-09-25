'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 13,
      // Contrast colors for a light theme:
      baseColor: [0.93, 0.93, 0.93],      // Light grey sphere surface
      markerColor: [0.1, 0.1, 0.1],       // Dark pin marker
      glowColor: [0.85, 0.85, 0.85],      // Subtle outer edge glow
      markers: [
        // Coordinates for the Philippines: [latitude, longitude]
        { location: [12.8797, 121.774], size: 0.08 },
      ],
      onRender: (state: Record<string, any>) => {
        state.phi = phi
        phi += 0.005
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[420px] mx-auto flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{ width: '100%', height: '100%', contain: 'layout paint size' }}
      />
    </div>
  )
}

