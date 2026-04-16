import { useEffect, useRef } from 'react'

export default function BitcoinRain() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const lastSpawnRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = (x, y) => {
      const now = performance.now()
      if (now - lastSpawnRef.current < 22) return
      lastSpawnRef.current = now
      const count = 1 + Math.floor(Math.random() * 2)
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.6,
          vy: Math.random() * 0.6 - 0.4,
          size: 14 + Math.random() * 10,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.12,
          life: 0,
          ttl: 1400 + Math.random() * 900
        })
      }
      if (particlesRef.current.length > 160) {
        particlesRef.current.splice(0, particlesRef.current.length - 160)
      }
    }

    const onMove = (e) => spawn(e.clientX, e.clientY)
    const onTouch = (e) => {
      const t = e.touches[0]
      if (t) spawn(t.clientX, t.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })

    let prev = performance.now()
    const tick = (now) => {
      const dt = Math.min(48, now - prev)
      prev = now
      ctx.clearRect(0, 0, width, height)

      const arr = particlesRef.current
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i]
        p.life += dt
        if (p.life >= p.ttl || p.y - p.size > height) {
          arr.splice(i, 1)
          continue
        }
        p.vy += 0.045 * (dt / 16)
        p.x += p.vx * (dt / 16)
        p.y += p.vy * (dt / 16)
        p.rot += p.vr * (dt / 16)

        const t = p.life / p.ttl
        const alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = Math.max(0, alpha)
        ctx.shadowColor = 'rgba(247, 147, 26, 0.55)'
        ctx.shadowBlur = 12
        ctx.fillStyle = '#f7931a'
        ctx.font = `700 ${p.size}px Inter, -apple-system, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('₿', 0, 0)
        ctx.restore()
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return <canvas ref={canvasRef} className="bitcoin-rain" aria-hidden="true" />
}
