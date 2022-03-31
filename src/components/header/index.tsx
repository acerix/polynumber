import { FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'
import { Link } from 'preact-router/match'

const Header: FunctionalComponent = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = (): void => setIsNavCollapsed(!isNavCollapsed)
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            Polynumber
          </a>
          <span class="navbar-text text-white">
            Poly wants a number?
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon" />
          </button>
          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="nav-menu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link text-white" href="/polynumbers/" activeClassName="active" onClick={handleNavCollapse}>
                  Encyclopedia
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link text-white" href="/edit/" activeClassName="active" onClick={handleNavCollapse}>
                  Editor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
