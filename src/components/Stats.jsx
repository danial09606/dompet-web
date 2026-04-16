const stats = [
  { num: '0 %', lbl: 'fees with Spark' },
  { num: '<1s', lbl: 'Avg Lightning settle' },
  { num: '10M+', lbl: 'Sats routed daily' },
  { num: '100%', lbl: 'self-custodial' }
]

export default function Stats() {
  return (
    <section className="section" id="stats" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.lbl} className="stat">
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
