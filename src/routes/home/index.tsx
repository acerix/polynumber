import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router'
import Helmet from 'react-helmet'
import { getRandomPolynumber } from '../polynumbers/meta'

const gotoRandomPolynumber = (event: MouseEvent): boolean => {
  if (typeof window !== 'undefined') {
    event.preventDefault()
    const polynumber = getRandomPolynumber()
    window.location.href = `/${polynumber.path}/`
    return false
  }
  return true
}

const Home: FunctionalComponent = () => {
  return (
    <section class="container">
      <Helmet title="Polynumber" />
      <div class="px-4 pt-5 my-5 text-center">
        <h1 class="h4 fw-bold">Polynumber.com</h1>
        <div class="col-lg-6 mx-auto mt-4">
          <p class="lead mb-4">Welcome to Polynumberopia.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link class="btn btn-outline-primary btn-lg px-4 me-sm-3" href="/polynumbers/">
              Encyclopedia
            </Link>
            <a class="btn btn-outline-success btn-lg px-4 me-sm-3" href="#/random/" onClick={gotoRandomPolynumber}>
              Random
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
