function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title" translate="no">يعقوب للتجارة</h3>
        <div className="footer-social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/svg/facebook.svg"
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/svg/whatsapp.svg"
              alt="Twitter"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/svg/instagram.svg"
              alt="Instagram"
              className="social-icon"
            />
          </a>
        </div>
        <div className="footer-copyright">
          <p translate="no">
            © {new Date().getFullYear()} يعقوب للتجارة. جميع الحقوق محفوظة.
            <br />© {new Date().getFullYear()} Yaacoub Lil Tijara. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
