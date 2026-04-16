export default function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="container footer-inner">
        <div className="brand">
          <img src="/images/dompet-logo.svg" alt="" className="brand-mark" />
          <span>Dompet</span>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>

        <div>© {new Date().getFullYear()} Dompet</div>
      </div>
    </footer>
  )
}
