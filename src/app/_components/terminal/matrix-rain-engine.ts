const CHARACTERS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789"
const CELL = 15
const INTERVAL = 50
const character = () =>
  CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]

type Column = { head: number; speed: number; glyphs: string[]; row: number }

export function startMatrixRain(
  canvas: HTMLCanvasElement,
  reducedMotion: boolean
) {
  const context = canvas.getContext("2d")
  if (!context) return () => {}
  let width = 1
  let height = 1
  let columns: Column[] = []
  let frame: number | null = null
  let stopped = false
  let previousTime = 0

  const draw = () => {
    context.fillStyle = "#050d08"
    context.fillRect(0, 0, width, height)
    context.font = `${CELL}px "Roboto Mono", monospace`
    columns.forEach((column, index) => {
      column.glyphs.forEach((glyph, tail) => {
        const y = (column.head - tail) * CELL
        if (y < 0 || y > height + CELL) return
        context.fillStyle =
          tail === 0
            ? "#e0ffe8"
            : `rgba(75, 235, 126, ${Math.pow(1 - tail / column.glyphs.length, 1.6)})`
        context.fillText(glyph, index * CELL, y)
      })
    })
  }

  const resize = () => {
    if (stopped) return
    const bounds = canvas.getBoundingClientRect()
    width = Math.max(1, bounds.width)
    height = Math.max(1, bounds.height)
    const scale = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * scale)
    canvas.height = Math.round(height * scale)
    context.setTransform(scale, 0, 0, scale, 0, 0)
    columns = Array.from({ length: Math.ceil(width / CELL) }, () => {
      const head = Math.random() * (height / CELL + 6)
      return {
        head,
        row: Math.floor(head),
        speed: 0.25 + Math.random() * 0.55,
        glyphs: Array.from(
          { length: 9 + Math.floor(Math.random() * 20) },
          character
        ),
      }
    })
    draw()
  }

  const tick = (time: number) => {
    if (stopped) return
    const elapsed = time - previousTime
    if (elapsed >= INTERVAL) {
      for (const column of columns) {
        column.head += (column.speed * Math.min(elapsed, 100)) / INTERVAL
        if (Math.floor(column.head) !== column.row) {
          column.row = Math.floor(column.head)
          column.glyphs.unshift(character())
          column.glyphs.pop()
        }
        if (column.head - column.glyphs.length > height / CELL)
          column.head = -Math.random() * 12
      }
      draw()
      previousTime = time
    }
    frame = window.requestAnimationFrame(tick)
  }

  const observer = new ResizeObserver(resize)
  observer.observe(canvas)
  resize()
  if (!reducedMotion) frame = window.requestAnimationFrame(tick)
  return () => {
    stopped = true
    if (frame !== null) window.cancelAnimationFrame(frame)
    observer.disconnect()
  }
}
