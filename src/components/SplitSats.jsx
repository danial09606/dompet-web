const shots = [
  {
    src: '/images/splitsats-balances.png',
    title: 'See who owes what',
    body: 'Every debt in one view. Nudge friends with a one-tap reminder, no awkward group chats required.'
  },
  {
    src: '/images/splitsats-expenses.png',
    title: 'Log expenses on the go',
    body: 'Dinner, petrol, a late-night biryani, tag it once and SplitSats keeps the maths in sats.'
  },
  {
    src: '/images/splitsats-settlements.png',
    title: 'Settle the trip in seconds',
    body: 'When the trip ends, settle balances over Spark, with 0 fees. Everyone leaves square, on-chain receipts included.'
  }
]

export default function SplitSats() {
  return (
    <section className="section splitsats" id="splitsats">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">SplitSats</span>
          <h2>Group trips, split in sats.</h2>
          <p>
            Plan a getaway, throw everyone in a group, and let Dompet track every expense.
            Balances, settlements all sats.
          </p>
        </div>

        <div className="shots-grid">
          {shots.map((s) => (
            <figure key={s.title} className="shot">
              <div className="shot-frame">
                <img src={s.src} alt={s.title} loading="lazy" />
              </div>
              <figcaption>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
