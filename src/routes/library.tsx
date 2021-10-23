
type Poly = {
  path: keyof typeof library;
  title: string;
}

type PolynomialLibrary = {
  [key:string]: Poly;
}

const library: PolynomialLibrary = {
  circle: {
    path: 'circle',
    title: 'Circle',
  }
}

export default library
