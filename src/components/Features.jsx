const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>
    ),
    title: 'Self-custodial by default',
    body: 'Your keys, your money. Only you can move your sats.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>
    ),
    title: 'Lightning fast payments',
    body: 'Settle in milliseconds with sub-cent fees. Scan a QR, tap a contact, or share a link, it just clears.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0 0-8"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/></svg>
    ),
    title: 'SplitSats with friends',
    body: 'Split dinner, rent, or a trip in a few taps. Everyone settles directly on-chain or over Lightning.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 8c2 1.2 4.5 1.8 7 1.8S17 9.2 19 8"/><circle cx="12" cy="14" r="2.5"/></svg>
    ),
    title: 'Spread SatsPacket, not hate',
    body: 'Wrap up sats into a shareable packet. Drop it in a group chat and whoever grabs it first keeps it.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: 'Stay stable, stay calm',
    body: 'Not a fan of Bitcoin price volatility? Opt in to our stable balance and earn yield through USDB.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>
    ),
    title: 'Support Spark Payments',
    body: 'Skip the fees entirely. Route over the Spark network and send sats at 0%.'
  }
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What is Dompet</span>
          <h2>Bitcoin, made social.</h2>
          <p>
            Dompet turns sats into something you share. Built around the way people actually
            pay friends, groups, and merchants without ever giving up custody.
          </p>
        </div>

        <div className="grid">
          {features.map((f) => (
            <article key={f.title} className="card">
              <div className="card-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
