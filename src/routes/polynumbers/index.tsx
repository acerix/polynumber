import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import library from './library'
import { PolynumberPlaque } from './meta'

const PolynumberIndex: FunctionalComponent = () => {
  const ref = createRef()
  return <div class="row my-4" ref={ref}>
    <h2>Encyclopedia of Rational Polynumbers</h2>
    {Object.values(library).map((polynumber, i) => {
      return (
        <div key={i} class="col-sm-6 col-md-4 mb-4">
          <PolynumberPlaque path={polynumber.path} />
        </div>
      )
    })}
  </div>
}

const Polynumbers: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet>
        <title>Encyclopedia of Rational Polynumbers</title>
      </Helmet>
      <PolynumberIndex />
    </section>
  )
}

export default Polynumbers
