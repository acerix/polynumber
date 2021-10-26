import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Home: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="About Polynumber.com<" />
      <h1>About Polynumber.com</h1>
      <p>Polynumber.com hosts various web scripting experiments based on <a href="https://youtu.be/S5E5Hcp7BjE?list=PL5A714C94D40392AB&amp;t=292" >rational polynumbers</a>.</p>
      <h2>Sponsors</h2>
      <p>Polynumber is brought to you by our corporate sponsors, and by generous contributions from viewers like you.</p>
      <ul>
        <li>
          <a href="https://psilly.com/">Psilly Corporation</a>
        </li>
      </ul>
    </section>
  )
}

export default Home
