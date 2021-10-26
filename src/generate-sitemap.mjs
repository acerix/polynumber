import { writeFileSync } from 'fs'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://polynumber.com/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/about/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/polynumbers/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/line/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/parabola/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/hyperbola/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/fermat-curve/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/folium-of-descartes/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/lemniscate-of-bernoulli/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/lemniscate-of-gerono/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/φ/</loc>
<lastmod>2021-10-01</lastmod>
</url>
<url>
<loc>https://polynumber.com/hippopede/</loc>
<lastmod>2021-10-01</lastmod>
</url>
</urlset>
`
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })
  writeFileSync('src/static/sitemap.xml', formatted)
}

void generate()
