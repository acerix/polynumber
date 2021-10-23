import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import library from '../library'

interface PolynumberPlaqueProps {
  polynumber: Polyrat;
}

const PolynumberPlaque: FunctionalComponent<PolynumberPlaqueProps> = (props: PolynumberPlaqueProps) => {
  const { polynumber } = props
  const ref = createRef()
  return <div class="card polynumber_plaque" ref={ref}>
    <div class="card-body">
      <h5 class="card-title">
        <strong><em>{polynumber.title}</em></strong>
      </h5>
      <p class="card-text"><a href={`//github.com/acerix/polynumber/tree/main/src/routes/${polynumber.path}`}>Source</a></p>
    </div>
    <noscript><p>JavaScript is required.</p></noscript>
  </div>
}

const PolynumberIndex: FunctionalComponent = () => {
  const ref = createRef()
  return <div class="row my-4" ref={ref}>
    <h2>Polynumbers</h2>
    {Object.values(library).map((polynumber, i) => {
      return (<div key={i} class="col-sm-6 col-md-4 mb-4"><PolynumberPlaque polynumber={polynumber} /></div>)
    })}
  </div>
}

const Polynumbers: FunctionalComponent = () => {

  return (
    <section class="container py-5">
      <Helmet>
        <title>Polynumber Index</title>
      </Helmet>
      <PolynumberIndex />
    </section>
  )
}

export default Polynumbers
