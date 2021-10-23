import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { Link } from 'preact-router/match'

const NotFound: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Page Not Found" />
      <h1>Not Found — Error 404</h1>
      <p>There's nothing here.</p>
      <Link href="/">
        Home
      </Link>
    </section>
  )
}

export default NotFound
