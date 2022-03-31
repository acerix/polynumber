import { Coefficents } from "cnum/dist/tsc/Polyrat"

export type Polynumber = {
  path: string;
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
      '0,1': 1n,
      '0,0': -1n
    },
  },
  line: {
    path: 'line',
    title: 'Line',
    description: 'The most linear polynomials are known as lines.',
    coefficents: {
      '1,0': 1n,
      '0,1': -1n
    },
  },
  parabola: {
    path: 'parabola',
    title: 'Parabola',
    description: 'An expression in parables.',
    coefficents: {
      '2,0': 1n,
      '0,1': -1n
    }
  },
  'inverse-parabola': {
    path: 'inverse-parabola',
    title: 'Inverse Parabola',
    description: 'An unexpression in parables.',
    coefficents: {
      '-2,0': 1n,
      '0,1': -1n
    }
  },
  hyperbola: {
    path: 'hyperbola',
    title: 'Hyperbola',
    description: 'A hyperbolic experience.',
    coefficents: {
      '0,0': -1n,
      '1,1': 1n
    }
  },
  circle: {
    path: 'circle',
    title: 'Circle',
    description: 'A circle.',
    coefficents: {
      '0,0': -1n,
      '2,0': 1n,
      '0,2': 1n
    }
  },
  // wips:
  // square: {
  //   path: 'square',
  //   title: 'Square',
  //   description: 'A square.',
  //   coefficents: {
  //     '0,0': -1n,
  //     '2,0': 1n,
  //     '0,2': 1n
  //   }
  // },
  // triangle: {
  //   path: 'triangle',
  //   title: 'Triangle',
  //   description: 'A triangle.',
  //   coefficents: {
  //     '0,0': -1n,
  //     '2,0': 1n,
  //     '0,2': 1n
  //   }
  // },
  'fermat-curve': {
    path: 'fermat-curve',
    title: 'Fermat Curve',
    description: 'A Fermat curve.',
    coefficents: {
      '0,0': -1n,
      '3,0': 1n,
      '0,3': 1n
    }
  },
  'folium-of-descartes': {
    path: 'folium-of-descartes',
    title: 'Folium of Descartes',
    description: 'A folium of Descartes.',
    coefficents: {
      '3,0': 1n,
      '1,1': -3n,
      '0,3': 1n
    }
  },
  'lemniscate-of-bernoulli': {
    path: 'lemniscate-of-bernoulli',
    title: 'Lemniscate of Bernoulli',
    description: 'A lemniscate of Bernoulli.',
    coefficents: {
      '2,0': -2n,
      '4,0': 1n,
      '0,2': 2n,
      '2,2': 2n,
      '0,4': 1n
    }
  },
  'lemniscate-of-gerono': {
    path: 'lemniscate-of-gerono',
    title: 'Lemniscate of Gerono',
    description: 'A lemniscate of Gerono.',
    coefficents: {
      '2,0': -1n,
      '4,0': 1n,
      '0,2': 1n
    }
  },
  quartic: {
    path: 'quartic',
    title: 'quartic⁴',
    description: 'A quartic polynomial.',
    coefficents: {
      '0,0': 8n,
      '1,0': -5n,
      '3,0': 4n,
      '4,0': -1n,
      '0,1': -1n
    }
  },
  'jumping-jack': {
    path: 'jumping-jack',
    title: 'Jumping Jack',
    coefficents: {
      '0,0': -1n,
      '1,1': 48n,
      '2,1': -64n,
      '1,2': -64n
    }
  },
  φ: {
    path: 'φ',
    title: 'Phi (φ)',
    coefficents: {
      '2,0': -1n,
      '1,1': -1n,
      '0,2': -1n
    }
  },
  hippopede: {
    path: 'hippopede',
    title: 'Hippopede',
    coefficents: {
      '1,0': -4n,
      '4,0': 1n,
      '0,2': -1n,
      '2,2': 2n,
      '0,4': 1n
    }
  },
}

export default library
