import { FunctionalComponent, h } from 'preact'

const Footer: FunctionalComponent = () => {
  return (
    <footer class="footer text-muted py-3 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-10">
            <p class="mb-2">© <time id="copyright-year">{new Date().getFullYear()}</time> <a class="text-muted text-decoration-none" href="https://polynumber.com/">Polynumber.com</a>. All rights reserved.</p>
          </div>
          <div class="col-sm-5 col-md-2">
            <p class="float-end mb-2">
              <a class="text-muted text-decoration-none me-2" href="https://github.com/acerix/polynumber" target="_blank" rel="noreferrer" title="Source Code on GitHub" role="img">Source</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
