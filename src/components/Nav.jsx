import { useEffect, useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880 && open) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Dompet home" onClick={close}>
          <img src="/images/dompet-logo.svg" alt="" className="brand-mark" />
          <span>Dompet</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#splitsats">SplitSats</a>
          <a href="#satspacket">SatsPacket</a>
        </nav>

        <div className="nav-cta">
          <button className="btn btn-ghost nav-github" disabled aria-disabled="true" title="Coming soon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.12-3.08 0 0 .98-.31 3.2 1.18a11.12 11.12 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.6.24 2.78.12 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            GitHub
            <span className="soon-pill">Soon</span>
          </button>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <nav className="mobile-links" aria-label="Mobile primary">
          <a href="#features" onClick={close}>Features</a>
          <a href="#splitsats" onClick={close}>SplitSats</a>
          <a href="#satspacket" onClick={close}>SatsPacket</a>
        </nav>

        <div className="mobile-cta">
          <button className="btn btn-ghost btn-lg" disabled aria-disabled="true" title="Coming soon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.12-3.08 0 0 .98-.31 3.2 1.18a11.12 11.12 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.6.24 2.78.12 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            GitHub
            <span className="soon-pill">Soon</span>
          </button>
          <a
            className="btn btn-primary btn-lg"
            href="https://testflight.apple.com/join/kwPjcuND"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Download App
          </a>
        </div>
      </div>

      {open && <button className="nav-backdrop" aria-label="Close menu" onClick={close} />}
    </header>
  )
}
