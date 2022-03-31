import { FunctionalComponent, h } from 'preact'

const Footer: FunctionalComponent = () => {
  return (
    <footer class="footer text-muted py-3">
      <div class="container">
        <p class="float-end mb-2">
          <a class="text-muted text-decoration-none me-2" href="https://github.com/acerix/polynumber" target="_blank" rel="noreferrer" title="Source Code on GitHub" role="img" aria-label="Cat face in HTML source code tag">&lt;🐱/&gt;</a>
        </p>
        <p class="mb-2">© <time id="copyright-year">{new Date().getFullYear()}</time> <a class="text-muted text-decoration-none" href="https://polynumber.com/">polynumber.com</a></p>
      </div>
    </footer>
  )
}

export default Footer
