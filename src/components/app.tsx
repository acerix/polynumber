import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'
import Helmet from 'react-helmet'

import Home from '../routes/home'
import PolynumberIndex from '../routes/polynumbers'
import PolynumberVisualizer from '../routes/polynumber'

import NotFound from '../routes/not-found'
import Header from './header'
import Footer from './footer'

const App: FunctionalComponent = () => {
  return (
    <div>
      <Helmet
        htmlAttributes={{lang: "en-CA"}}
        title="untitled" titleTemplate="%s | polynumber.com"
        titleAttributes={{itemprop: "name", lang: "en-CA"}}
        meta={[
          {name: "description", content: "Rational polynomials, or polynumbers, mind control."}
        ]}
        link={[
          {rel: "canonical", href: "https://polynumber.com/"},
        ]}
        script={[
          {type: "application/ld+json", innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Polynumber.com",
            "legalName" : "Polynumber.com",
            "url": "https://polynumber.com",
            "logo": "https://polynumber.com/assets/polynumber.png",
            "foundingDate": "2013",
            "founders": [
              {
              "@type": "Person",
              "name": "Dylan Ferris"
              }
            ],
            "email": "dylan@polynumber.com"
          }`}
        ]}
      />
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <PolynumberIndex path="/polynumbers/" />
          <Route path="/:path/" component={PolynumberVisualizer} />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
