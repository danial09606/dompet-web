export default function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="container footer-inner">
        <div className="brand">
          <img src="/images/dompet-logo.svg" alt="" className="brand-mark" />
          <span>Dompet</span>
        </div>

        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="mailto:support@dbittechnologies.my">Support</a>
          <a href="https://x.com/dompetsatoshi" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#">GitHub</a>
        </div>

        <div>© {new Date().getFullYear()} Dompet</div>
      </div>
    </footer>
  )
}
