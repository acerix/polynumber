import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

type GetContextFunction = (webGL2: HTMLCanvasElement) => WebGL2RenderingContext

type InitFunction = (ctx: WebGL2RenderingContext) => void

type ReadyFunction = (whenReady: VoidFunction) => void

type DrawFunction = (ctx: WebGL2RenderingContext, frameCount: number) => void

type ResizeFunction = (ctx: WebGL2RenderingContext) => void

interface WebGL2Options {
  contextType?: string;
  framesPerSecond?: number;
}

interface WebGL2Props {
  getContext?: GetContextFunction;
  init?: InitFunction;
  ready?: ReadyFunction;
  draw: DrawFunction;
  onResize?: ResizeFunction;
  framesPerSecond?: number;
  options?: WebGL2Options;
}

const defaultContextOptions = {
  alpha: false,
  depth: false,
  preserveDrawingBuffer: true
}

export const WebGL2: FunctionalComponent<WebGL2Props> = (props: WebGL2Props) => {
  const { getContext, init, ready, draw, onResize, framesPerSecond, ...rest } = props
  const ref = createRef()
  const frameMilliseconds = framesPerSecond ? 1000 / framesPerSecond : undefined

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement
    let paused = false
    let frameCount = -1
    let renderCallbackID: number
    const ctx = getContext ? getContext(canvas) : canvas.getContext('webgl2', defaultContextOptions) as WebGL2RenderingContext
    if (!ctx) {
      alert('Error getting context. WebGL2 is required.')
      window.location.href='https://get.webgl.org/webgl2/'
      return
    }

    const handleResize = (): void => {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
      if (onResize) onResize(ctx)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    const handleBlur = (): void => {
      paused = true
    }
    window.addEventListener('blur', handleBlur)

    const handleFocus = (): void => {
      paused = false
    }
    window.addEventListener('focus', handleFocus)

    const setFullscreen = (): void => {
      if (!document.fullscreenElement) {
        document.body.requestFullscreen().catch(err => {
          console.error('Fullscreen fail:', err)
        })
      }
    }
    window.addEventListener('click', setFullscreen)

    if (init) init(ctx)

    const render = (): void => {
      if (paused) {
        setTimeout(render, 128)
        return
      }
      frameCount++
      if (frameMilliseconds) {
        renderCallbackID = window.setTimeout(render, frameMilliseconds)
      }
      else {
        renderCallbackID = window.requestAnimationFrame(render)
      }
      draw(ctx, frameCount)
    }

    const whenReady = (): void => {
      setTimeout(render, 0)
    }

    if (ready===undefined) whenReady()
    else ready(whenReady)

    return (): void => {
      if (frameMilliseconds) {
        window.clearTimeout(renderCallbackID)
      }
      else {
        window.cancelAnimationFrame(renderCallbackID)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('click', setFullscreen)
    }

  }, [getContext, init, ready, draw, onResize, ref, frameMilliseconds])

  return <canvas ref={ref} {...rest} />
}

export default WebGL2
