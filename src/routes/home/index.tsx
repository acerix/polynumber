import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Home: FunctionalComponent = () => {
  return (
    <section class="container">
      <Helmet title="Polynumber" />
      <div class="px-4 pt-5 my-5 text-center">
        <h1 class="h4 fw-bold">Polynumber.com</h1>
        <p>Welcome to polynumberopia.</p>
      </div>
    </section>
  )
}

export default Home
