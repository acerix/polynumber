/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Polyrat } from "cnum/dist/tsc/Polyrat"
import { createRef, FunctionalComponent, h } from "preact"
import { PreactHTMLConverter } from "preact-html-converter"
import { Link } from "preact-router"
import { Helmet } from "react-helmet"
import library, { Polynumber } from "./library"

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
      { polynumber.description ? <p class="card-text">{polynumber.description}</p> : '' }
      <p class="card-text"><strong>0 = {PreactHTMLConverter().convert(polyrat.toHTMLFormula())}</strong></p>
      <p class="card-text"><strong>{PreactHTMLConverter().convert(polyrat.toStandardAlphaFormHTML())}</strong></p>
      <p class="card-text">JSON: {JSON.stringify(JSON.parse(polyrat.toJSON()), null, 2)}</p>
      <p class="card-text">calc: {polyrat.toCalcFormula()}</p>
      <p class="card-text">GLSL: {polyrat.toGLSLFormula()}</p>
    </div>
  </div>
}

export const getRandomPolynumber = (): Polynumber => {
  const paths = Object.keys(library)
  const path = paths[Math.random() * paths.length << 0]
  return library[path]
}

export const RandomPolynumber: FunctionalComponent = () => {
  const polynumber = getRandomPolynumber()
  const polyrat = new Polyrat(polynumber.coefficents)
  if (typeof window !== 'undefined') {
    window.location.href = `/${polynumber.path}/`
  }
  return (
    <section class="container py-5">
      <Helmet>
        <title>Random Polynumber</title>
      </Helmet>
      <p>Redirecting to the "{polynumber.title}" polynumber...</p>
      <p><strong>{PreactHTMLConverter().convert(polyrat.toHTMLFormula())}</strong></p>
      <Link class="btn btn-outline-primary btn-lg px-4 me-sm-3" href={`/${polynumber.path}/`}>{polynumber.title}</Link>
    </section>
  )
}
