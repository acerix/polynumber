import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import NotFound from '../not-found'

const polynumbers = {
  circle: ['pi, my guy?'],
}

interface Props {
  polynumber: keyof typeof polynumbers;
}

const Polynumber: FunctionalComponent<Props> = (props: Props) => {
  const { polynumber } = props
  
  if (!(polynumber in polynumbers)) {
    return <NotFound default />
  }

  return (
    <section class="container py-5">
      <Helmet>
        <title>{ polynumber.replace('-',' ') }</title>
      </Helmet>
      { polynumbers[polynumber] }
    </section>
  )
}

export default Polynumber
