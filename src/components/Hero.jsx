export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="badge" role="status">
          <span className="dot" aria-hidden="true" />
          Bitcoin | Lightning | Spark
        </div>

        <h1>
          A Bitcoin wallet that <br />
          feels like <span className="accent">cash</span>.
        </h1>

        <p className="lead">
          Send sats to friends, split the bill, and stash packets of Bitcoin, all in one pocket-sized wallet.
        </p>

        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href="#download">Download on TestFlight</a>
          <span className="btn-wrap">
            <button className="btn btn-ghost btn-lg" disabled aria-disabled="true" title="Coming soon">
              Dompet Pay SDK
            </button>
            <span className="soon-pill soon-pill-float">Soon</span>
          </span>
        </div>

        <div className="hero-visual">
          <div className="phone-frame">
            <img
              src="/images/wallet.png"
              alt="Dompet wallet showing total balance of 1,203 sats and recent transactions"
              className="phone-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
