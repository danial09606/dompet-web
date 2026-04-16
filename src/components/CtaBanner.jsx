export default function CtaBanner() {
  return (
    <section className="container" id="download">
      <div className="cta-banner">
        <h2>Get Dompet on your phone.</h2>
        <p>
          Join the TestFlight and be first to try SplitSats, SatsPacket, and the new Lightning
          experience. iOS available now, Android coming soon.
        </p>
        <div className="hero-ctas" style={{ marginBottom: 0 }}>
          <a
            className="btn btn-primary btn-lg"
            href="https://testflight.apple.com/join/kwPjcuND"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join TestFlight
          </a>
        </div>
      </div>
    </section>
  )
}
