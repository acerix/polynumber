/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import WebGL2 from '../common/webgl2'
import NotFound from '../not-found'
import style from '../common/canvas/style.css'
import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import library from '../polynumbers/library'
import { PolynumberPlaque } from '../polynumbers/meta'
import Polyrat from 'cnum/dist/tsc/Polyrat'
import { GridOverlay } from '../common/grid-overlay'
// import { GridOverlay } from 'jrid'

const initShader = (gl: WebGL2RenderingContext, type: number, source: string): WebGLShader => {
  const shader = gl.createShader(type)
  if (!shader) {
    throw 'Missing shader'
  }
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader)
  }
  return shader
}

const initProgram = (gl: WebGL2RenderingContext): WebGLProgram => {
  const program = gl.createProgram()
  if (!program) {
    throw 'Missing program'
  }
  const fragmentShaderSource = document.getElementById('fragmentShader')?.textContent
  if (!fragmentShaderSource) {
    throw 'Missing fragmentShaderSource'
  }
  const fragmentShader = initShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  gl.attachShader(program, fragmentShader)
  const vertexShaderSource = document.getElementById('vertexShader')?.textContent
  if (!vertexShaderSource) {
    throw 'Missing vertexShaderSource'
  }
  const vertexShader = initShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  gl.attachShader(program, vertexShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(program)??'Error from getProgramParameter'
  }
  gl.useProgram(program)
  return program
}

interface Props {
  path: keyof typeof library;
}

const PolynumberVisualizer: FunctionalComponent<Props> = (props: Props) => {
  const { path } = props
  
  if (!(path in library)) {
    return <NotFound default />
  }
  const polynumber = library[path]

  const ref = createRef<HTMLElement>()
  let shaderProgram: WebGLProgram
  let timeUniform: WebGLUniformLocation|null
  let translateUniform: WebGLUniformLocation|null
  let scaleUniform: WebGLUniformLocation|null
  const translate = [0, 0]
  const scale = [1, 1]

  const bindBuffers = (gl: WebGL2RenderingContext, program: WebGLProgram): void => {
    const positionAttrib = gl.getAttribLocation(program, 'a_position')
    const vertices = new Float32Array([
      +1, +1, +0,
      -1, +1, +0,
      +1, -1, +0,
      -1, -1, +0
    ])
    const vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    gl.vertexAttribPointer(positionAttrib, 3, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, null) // unbind
    gl.enableVertexAttribArray(positionAttrib)
    timeUniform = gl.getUniformLocation(program, 'u_time')
    translateUniform = gl.getUniformLocation(program, 'u_translate')
    scaleUniform = gl.getUniformLocation(program, 'u_scale')
  }
  
  const init = (ctx: WebGL2RenderingContext): void => {
    translate[0] = -ctx.canvas.width/2
    translate[1] = -ctx.canvas.height/2
    shaderProgram = initProgram(ctx)
    bindBuffers(ctx, shaderProgram)
  }

  const onResize = (ctx: WebGL2RenderingContext): void => {
    ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  const setTranslate = (x: number, y: number): void => {
    translate[0] = x
    translate[1] = y
  }

  const setScale = (x: number, y: number): void => {
    scale[0] = x
    scale[1] = y
    setTranslate(0, 0)
  }

  const draw = (ctx: WebGL2RenderingContext, frameCount: number): void => {
    ctx.uniform1f(timeUniform, frameCount)
    ctx.uniform2f(translateUniform, translate[0], translate[1])
    ctx.uniform2f(scaleUniform, scale[0], scale[1])
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4)
  }

  const polyrat = new Polyrat(polynumber.coefficents)

  return (
    <section ref={ref} class={style.canvas_frame}>
      <Helmet><title>{polynumber.title}</title></Helmet>
      <div class="d-none"><PolynumberPlaque path={polynumber.path} /></div>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="shaders" aria-labelledby="shadersLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="shadersLabel">Shaders</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="parameterPanel" aria-label="Close" />
        </div>
        <div class="offcanvas-body">
          <form>
            <div class="mb-3">
              <label for="vertexShader">Vertex Shader</label>
              <textarea class="form-control" id="vertexShader" rows={6}>{vertexShaderSource}</textarea>
            </div>
            <div class="mb-3">
              <label for="fragmentShader">Fragment Shader</label>
              <textarea class="form-control" id="fragmentShader" rows={20}>{fragmentShaderSource.replace('POLYNUMBER_FORMULA', polyrat.toGLSLFormula())}</textarea>
            </div>
          </form>
        </div>
      </div>
      <div>
        <GridOverlay setTranslate={setTranslate} setScale={setScale} />
      </div>
      <WebGL2 init={init} onResize={onResize} draw={draw} />
    </section>
  )
}

export default PolynumberVisualizer
