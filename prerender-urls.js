module.exports = async function () {

  const pages = [
    {
        "url": "/",
        "title": "Polynumber",
        "photo": "/assets/polynumber.webp"
    },
    {
        "url": "/about/",
        "title": "About Polynumber.com"
    },
    {
        "url": "/edit/",
        "title": "Polynumber Editor"
    },
    {
        "url": "/polynumbers/",
        "title": "Polynumbers",
        "photo": "/assets/polynumber.webp"
    },
  ]

  const polynumbers = {
    constant: {
      path: 'constant',
      title: 'Constant Value',
    },
    line: {
      path: 'line',
      title: 'Line',
    },
    parabola: {
      path: 'parabola',
      title: 'Parabola',
    },
    'inverse-parabola': {
      path: 'inverse-parabola',
      title: 'Inverse Parabola',
    },
    hyperbola: {
      path: 'hyperbola',
      title: 'Hyperbola',
    },
    circle: {
      path: 'circle',
      title: 'Circle',
    },
    'fermat-curve': {
      path: 'fermat-curve',
      title: 'Fermat Curve',
    },
    'folium-of-descartes': {
      path: 'folium-of-descartes',
      title: 'Folium of Descartes',
    },
    'lemniscate-of-bernoulli': {
      path: 'lemniscate-of-bernoulli',
      title: 'Lemniscate of Bernoulli',
    },
    'lemniscate-of-gerono': {
      path: 'lemniscate-of-gerono',
      title: 'Lemniscate of Gerono',
    },
    quartic: {
      path: 'quartic',
      title: 'quartic⁴',
    },
    'jumping-jack': {
      path: 'jumping-jack',
      title: 'Jumping Jack',
    },
    φ: {
      path: 'φ',
      title: 'Phi (φ)',
    },
    hippopede: {
      path: 'hippopede',
      title: 'Hippopede',
    },
  }

  for (const polynumber of Object.values(polynumbers)) {
    pages.push({
      url: `/${polynumber.path}/`,
      title: polynumber.title,
      photo: `/assets/thumbnails/${polynumber.path}.webp`
    })
  }

  return pages
}
