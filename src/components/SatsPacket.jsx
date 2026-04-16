export default function SatsPacket() {
  return (
    <section className="section satspacket" id="satspacket">
      <div className="container">
        <div className="satspacket-inner">
          <div className="satspacket-copy">
            <span className="eyebrow">SatsPacket</span>
            <h2>Gift sats. One QR, many hands.</h2>
            <p>
              Wrap up Bitcoin into a shareable packet for Eid, Christmas, a birthday, or a random Friday.
              Share the QR in any group chat and whoever scans it claims their slice of sats.
            </p>

            <ul className="feature-list">
              <li>
                <span className="tick" aria-hidden="true">✓</span>
                Split a packet equally, or let the first-come-first-serve rule take over
              </li>
              <li>
                <span className="tick" aria-hidden="true">✓</span>
                Split a packet randomly and let the fun begin
              </li>
              <li>
                <span className="tick" aria-hidden="true">✓</span>
                Set an expiry unclaimed sats come straight back to your wallet
              </li>
              <li>
                <span className="tick" aria-hidden="true">✓</span>
                Watch claims land in real time, right down to the receiver
              </li>
            </ul>
          </div>

          <figure className="satspacket-shot">
            <div className="shot-frame">
              <img
                src="/images/satspacket.png"
                alt="Happy Eidul-Fitr SatsPacket with 200 of 1,000 sats claimed and a shareable QR code"
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
