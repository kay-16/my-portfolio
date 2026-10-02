'use client'

import type { Globe } from 'cobe'
import createGlobe from 'cobe'
import { LuMapPin } from 'react-icons/lu'
import { useCallback, useEffect, useRef, useState } from 'react'

const MARKERS = [
  { id: 'ph', location: [12.8797, 121.774] as [number, number], size: 0.05 }
]

function getThemeOptions(isDark: boolean) {
  return {
    dark: isDark ? 1 : 0,
    diffuse: isDark ? 2 : 1.4,
    mapBrightness: isDark ? 2 : 1.8,
    baseColor: isDark 
      ? ([0.4, 0.3, 0.32] as [number, number, number]) 
      : ([1, 1, 1] as [number, number, number]),
    markerColor: isDark 
      ? ([0.95, 0.9, 0.7] as [number, number, number]) 
      : ([0.55, 0.11, 0.14] as [number, number, number]), // Tamarillo Red
    glowColor: isDark
      ? ([0.25, 0.15, 0.16] as [number, number, number])
      : ([0.96, 0.93, 0.82] as [number, number, number]), // Butter Yellow glow
  }
}

export default function LocationCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<Globe | null>(null)
  const [ready, setReady] = useState(false)
  const pointerInteractingRef = useRef<{ x: number; y: number } | null>(null)
  const dragOffsetRef = useRef({ phi: 0 })
  
  // 2.88 centers the Philippines directly in front of the camera
  const phiOffsetRef = useRef(2.88)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteractingRef.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
  }, [])

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      if (pointerInteractingRef.current !== null) {
        const deltaX = e.clientX - pointerInteractingRef.current.x
        dragOffsetRef.current = { phi: deltaX / 300 }
      }
    }

    function handlePointerUp() {
      if (pointerInteractingRef.current !== null) {
        phiOffsetRef.current += dragOffsetRef.current.phi
        dragOffsetRef.current = { phi: 0 }
      }
      pointerInteractingRef.current = null
      if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
    }

    globalThis.addEventListener('pointermove', handlePointerMove, { passive: true })
    globalThis.addEventListener('pointerup', handlePointerUp, { passive: true })

    return () => {
      globalThis.removeEventListener('pointermove', handlePointerMove)
      globalThis.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const width = canvas.offsetWidth
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 640 ? 1.8 : 2)
    const isDark = document.documentElement.classList.contains('dark')

    globeRef.current = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width,
      height: width,
      phi: phiOffsetRef.current,
      theta: 0.05,
      mapSamples: 16_000,
      markerElevation: 0.02,
      markers: MARKERS,
      ...getThemeOptions(isDark),
    })

    let animationId = 0

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return

      const nextWidth = Math.round(entry.contentRect.width)
      const nextDpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 640 ? 1.8 : 2)

      globeRef.current?.update({
        devicePixelRatio: nextDpr,
        width: nextWidth,
        height: nextWidth,
      })
    })

    resizeObserver.observe(canvas)

    // Render loop without auto-increment — globe does NOT spin automatically
    function animate() {
      globeRef.current?.update({
        phi: phiOffsetRef.current + dragOffsetRef.current.phi,
      })
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const fadeInId = requestAnimationFrame(() => {
      setReady(true)
    })

    return () => {
      cancelAnimationFrame(animationId)
      cancelAnimationFrame(fadeInId)
      resizeObserver.disconnect()
      globeRef.current?.destroy()
      globeRef.current = null
    }
  }, [])

  useEffect(() => {
    function applyTheme() {
      const isDark = document.documentElement.classList.contains('dark')
      globeRef.current?.update(getThemeOptions(isDark))
    }

    applyTheme()

    const observer = new MutationObserver(applyTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative flex h-60 flex-col overflow-hidden rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-5 sm:p-6 shadow-xs select-none">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-medium text-[#A85854] dark:text-[#D4C49E] z-20">
        <LuMapPin className="w-3.5 h-3.5 opacity-100 shrink-0" />
        <span>Location</span>
      </div>

      {/* Globe Dome */}
      <div className="relative mx-auto -mt-6 aspect-square w-full max-w-[420px]">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          data-ready={ready}
          className="aspect-square size-full cursor-grab touch-none opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100"
        />

        {/* Anchored Philippines Badge positioned directly above the marker */}
        {MARKERS.map((m) => (
          <div
            key={m.id}
            className="pointer-events-none absolute bottom-[anchor(top)] left-[anchor(center)] -translate-x-1/2 -translate-y-2 z-20 transition-[opacity,filter]"
            style={{
              positionAnchor: `--cobe-${m.id}`,
              opacity: `var(--cobe-visible-${m.id}, 1)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 1)) * 8px))`,
            }}
          >
            <div className="px-3.5 py-1 rounded-full bg-[#8C1D24] text-[#FFFDF5] text-xs font-semibold shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#F3E5AB]" />
              Philippines
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}