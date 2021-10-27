import { Rat } from "cnum/dist/tsc/Rat"
import { Coefficents } from "cnum/dist/tsc/Polyrat"

export type Polynumber = {
  path: string; // keyof typeof library;
  title: string;
  description?: string;
  coefficents: Coefficents;
  formula?: string;
  displayUrl?: string;
  thumbnailUrl?: string;
  thumbnailLegacyUrl?: string;
}

type PolynomialLibrary = {
  [key:string]: Polynumber;
}

const library: PolynomialLibrary = {
  constant: {
    path: 'constant',
    title: 'Constant Value',
    description: 'When everytime you ask "why?", you get the same answer.',
    coefficents: {
      '0,1': new Rat(1),
      '0,0': new Rat(-1)
    },
  },
  line: {
    path: 'line',
    title: 'Line',
    description: 'The most linear polynomials are known as lines.',
    coefficents: {
      '1,0': new Rat(1),
      '0,1': new Rat(-1)
    },
  },
  parabola: {
    path: 'parabola',
    title: 'Parabola',
    description: 'An expression in parables.',
    coefficents: {
      '2,0': new Rat(1),
      '0,1': new Rat(-1)
    }
  },
  'inverse-parabola': {
    path: 'inverse-parabola',
    title: 'Inverse Parabola',
    description: 'An unexpression in parables.',
    coefficents: {
      '-2,0': new Rat(1),
      '0,1': new Rat(-1)
    }
  },
  hyperbola: {
    path: 'hyperbola',
    title: 'Hyperbola',
    description: 'A hyperbolic experience.',
    coefficents: {
      '0,0': new Rat(-1),
      '1,1': new Rat(1)
    }
  },
  circle: {
    path: 'circle',
    title: 'Circle',
    description: 'A circle.',
    coefficents: {
      '0,0': new Rat(-1),
      '2,0': new Rat(1),
      '0,2': new Rat(1)
    }
  },
  'fermat-curve': {
    path: 'fermat-curve',
    title: 'Fermat Curve',
    description: 'A Fermat curve.',
    coefficents: {
      '0,0': new Rat(-1),
      '3,0': new Rat(1),
      '0,3': new Rat(1)
    }
  },
  'folium-of-descartes': {
    path: 'folium-of-descartes',
    title: 'Folium of Descartes',
    description: 'A folium of Descartes.',
    coefficents: {
      '3,0': new Rat(1),
      '1,1': new Rat(-3),
      '0,3': new Rat(1)
    }
  },
  'lemniscate-of-bernoulli': {
    path: 'lemniscate-of-bernoulli',
    title: 'Lemniscate of Bernoulli',
    description: 'A lemniscate of Bernoulli.',
    coefficents: {
      '2,0': new Rat(-2),
      '4,0': new Rat(1),
      '0,2': new Rat(2),
      '2,2': new Rat(2),
      '0,4': new Rat(1)
    }
  },
  'lemniscate-of-gerono': {
    path: 'lemniscate-of-gerono',
    title: 'Lemniscate of Gerono',
    description: 'A lemniscate of Gerono.',
    coefficents: {
      '2,0': new Rat(-1),
      '4,0': new Rat(1),
      '0,2': new Rat(1)
    }
  },
  quartic: {
    path: 'quartic',
    title: 'quartic⁴',
    description: 'A quartic polynomial.',
    coefficents: {
      '0,0': new Rat(8),
      '1,0': new Rat(-5),
      '3,0': new Rat(4),
      '4,0': new Rat(-1),
      '0,1': new Rat(-1)
    }
  },
  'jumping-jack': {
    path: 'jumping-jack',
    title: 'Jumping Jack',
    coefficents: {
      '0,0': new Rat(-1),
      '1,1': new Rat(48),
      '2,1': new Rat(-64),
      '1,2': new Rat(-64)
    }
  },
  φ: {
    path: 'φ',
    title: 'Phi (φ)',
    coefficents: {
      '2,0': new Rat(-1),
      '1,1': new Rat(-1),
      '0,2': new Rat(-1)
    }
  },
  hippopede: {
    path: 'hippopede',
    title: 'Hippopede',
    coefficents: {
      '1,0': new Rat(-4),
      '4,0': new Rat(1),
      '0,2': new Rat(-1),
      '2,2': new Rat(2),
      '0,4': new Rat(1)
    }
  },
}

export default library
