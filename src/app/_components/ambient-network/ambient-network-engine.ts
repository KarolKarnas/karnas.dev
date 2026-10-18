type Point = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  added?: boolean
}
type Options = {
  reducedMotion: boolean
  color: string
  secondaryColor: string
  cursorReaction: boolean
  addOnClick: boolean
}
const INTERVAL = 1000 / 30
const MAX_POINTS = 70

export function startAmbientNetwork(
  canvas: HTMLCanvasElement,
  options: Options
) {
  const context = canvas.getContext("2d")
  if (!context) return () => {}
  let width = 1
  let height = 1
  let reach = 150
  let points: Point[] = []
  let frame: number | null = null
  let previousTime: number | null = null
  let stopped = false
  let visible = true
  let pointer: { x: number; y: number } | null = null

  const createPoint = (
    x = Math.random() * width,
    y = Math.random() * height
  ): Point => ({
    x,
    y,
    vx: (Math.random() < 0.5 ? -1 : 1) * (3 + Math.random() * 4),
    vy: (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 3),
    radius: 1.2 + Math.random() * 1.2,
  })

  const line = (
    x: number,
    y: number,
    toX: number,
    toY: number,
    alpha: number
  ) => {
    context.globalAlpha = alpha
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(toX, toY)
    context.stroke()
  }
  const draw = () => {
    context.clearRect(0, 0, width, height)
    context.strokeStyle = options.color
    context.lineWidth = 0.7
    points.forEach((point, index) => {
      const proximity = pointer
        ? Math.max(
            0,
            1 - Math.hypot(point.x - pointer.x, point.y - pointer.y) / 180
          )
        : 0
      for (let next = index + 1; next < points.length; next++) {
        const other = points[next]
        const distance = Math.hypot(point.x - other.x, point.y - other.y)
        if (distance < reach) {
          line(
            point.x,
            point.y,
            other.x,
            other.y,
            (1 - distance / reach) * (0.32 + proximity * 0.24)
          )
        }
      }
      if (pointer && proximity > 0) {
        line(point.x, point.y, pointer.x, pointer.y, proximity * 0.24)
      }
      context.fillStyle =
        index % 5 === 0 ? options.secondaryColor : options.color
      context.globalAlpha = 0.07 + proximity * 0.1
      context.beginPath()
      context.arc(point.x, point.y, point.radius * 3, 0, Math.PI * 2)
      context.fill()
      context.globalAlpha = 0.5 + proximity * 0.45
      context.beginPath()
      context.arc(point.x, point.y, point.radius + proximity, 0, Math.PI * 2)
      context.fill()
    })
    context.globalAlpha = 1
  }

  const resize = () => {
    if (stopped) return
    const bounds = canvas.getBoundingClientRect()
    const oldWidth = width
    const oldHeight = height
    width = Math.max(1, bounds.width)
    height = Math.max(1, bounds.height)
    reach = Math.max(130, Math.min(190, width * 0.2))
    const scale = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * scale)
    canvas.height = Math.round(height * scale)
    context.setTransform(scale, 0, 0, scale, 0, 0)
    points.forEach((point) => {
      point.x *= width / oldWidth
      point.y *= height / oldHeight
    })
    const added = points.filter((point) => point.added)
    const automatic = points.filter((point) => !point.added)
    const count = Math.min(
      MAX_POINTS - added.length,
      Math.max(18, Math.round((width * height) / 16000))
    )
    points = [
      ...Array.from(
        { length: count },
        (_, index) => automatic[index] ?? createPoint()
      ),
      ...added,
    ]
    pointer = null
    draw()
  }

  const tick = (time: number) => {
    if (stopped || !visible || document.hidden) return
    const elapsed = previousTime === null ? INTERVAL : time - previousTime
    if (elapsed >= INTERVAL) {
      const seconds = Math.min(elapsed / 1000, 0.075)
      for (const point of points) {
        point.x += point.vx * seconds
        point.y += point.vy * seconds
        if (point.x < 0 || point.x > width) {
          point.x = Math.max(0, Math.min(width, point.x))
          point.vx *= -1
        }
        if (point.y < 0 || point.y > height) {
          point.y = Math.max(0, Math.min(height, point.y))
          point.vy *= -1
        }
      }
      draw()
      previousTime = time
    }
    frame = window.requestAnimationFrame(tick)
  }
  const syncAnimation = () => {
    if (frame !== null) window.cancelAnimationFrame(frame)
    frame = null
    previousTime = null
    if (!stopped && !options.reducedMotion && visible && !document.hidden)
      frame = window.requestAnimationFrame(tick)
  }
  const onPointerMove = (event: PointerEvent) => {
    if (options.reducedMotion || event.pointerType === "touch") return
    const bounds = canvas.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    pointer = x >= 0 && x <= width && y >= 0 && y <= height ? { x, y } : null
  }
  const clearPointer = () => {
    pointer = null
  }
  const onPointerOut = (event: PointerEvent) => {
    if (!event.relatedTarget) clearPointer()
  }
  const onClick = (event: MouseEvent) => {
    if (
      stopped ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.detail > 1 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element) ||
      event.target.closest(
        "a, button, input, select, textarea, label, summary, dialog, [role='button'], [contenteditable], video, audio"
      ) ||
      window.getSelection()?.toString()
    )
      return
    const bounds = canvas.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    if (x < 0 || x > width || y < 0 || y > height) return
    if (points.length >= MAX_POINTS) points.shift()
    points.push({ ...createPoint(x, y), added: true })
    draw()
  }

  const resizeObserver = new ResizeObserver(resize)
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    syncAnimation()
  })
  resizeObserver.observe(canvas)
  visibilityObserver.observe(canvas)
  document.addEventListener("visibilitychange", syncAnimation)
  if (options.cursorReaction && !options.reducedMotion) {
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerout", onPointerOut)
    window.addEventListener("blur", clearPointer)
  }
  if (options.addOnClick) window.addEventListener("click", onClick)
  resize()
  syncAnimation()

  return () => {
    stopped = true
    if (frame !== null) window.cancelAnimationFrame(frame)
    resizeObserver.disconnect()
    visibilityObserver.disconnect()
    document.removeEventListener("visibilitychange", syncAnimation)
    window.removeEventListener("pointermove", onPointerMove)
    window.removeEventListener("pointerout", onPointerOut)
    window.removeEventListener("blur", clearPointer)
    window.removeEventListener("click", onClick)
  }
}
