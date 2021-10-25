/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Polyrat } from "cnum/dist/tsc/Polyrat"
import { createRef, FunctionalComponent, h } from "preact"
import { PreactHTMLConverter } from "preact-html-converter"
import library from "./library"

interface PolynumberPlaqueProps {
  path: keyof typeof library;
}

export const PolynumberPlaque: FunctionalComponent<PolynumberPlaqueProps> = (props: PolynumberPlaqueProps) => {
  const { path } = props
  const polynumber = library[path]
  const polyrat = new Polyrat(polynumber.coefficents)
  polynumber.displayUrl = `/${polynumber.path}/`
  polynumber.thumbnailUrl = `/assets/thumbnails/${polynumber.path}.webp`
  polynumber.thumbnailLegacyUrl = `/assets/thumbnails/${polynumber.path}.png`
  const ref = createRef()
  return <div class="card polynumber_plaque" ref={ref}>
    <a href={polynumber.displayUrl} aria-label="Explore">
      <picture>
        <source srcset={polynumber.thumbnailUrl} type="image/webp" />
        <source srcset={polynumber.thumbnailLegacyUrl} type="image/png" /> 
        <img src={polynumber.thumbnailLegacyUrl} class="card-img-top" alt={`Visualization of ${polynumber.title}`} />
      </picture>
    </a>
    <div class="card-body">
      <h5 class="card-title">
        <strong><em>{polynumber.title}</em></strong>
      </h5>
      <p class="card-text"><strong>{polyrat.toString()} <br />0 = {PreactHTMLConverter().convert(polyrat.toHTMLFormula())}</strong></p>
      { polynumber.description ? <p class="card-text">{polynumber.description}</p> : '' }
      <p class="card-text">calc; {polyrat.toCalcFormula()} <br />GLSL: {polyrat.toGLSLFormula()}</p>
    </div>
  </div>
}
