function Footer(){


return <>
<footer className="footer">
  <div className="container">

    <div className="footer__main">

      <div className="footer__brand">
        <a href="/" className="footer__logo">
          Hire<span>ly</span>
          <i className="bi bi-briefcase-fill"></i>
        </a>

        <p>
          Connecting talented people with amazing opportunities.
          Find your next career move with Hirely.
        </p>

        <div className="footer__socials">
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>

      <div className="footer__links">
        <h3>Explore</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Find Jobs</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/companies">Companies</a></li>
        </ul>
      </div>

      <div className="footer__links">
        <h3>For Candidates</h3>
        <ul>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="/applications">My Applications</a></li>
          <li><a href="/register">Create Account</a></li>
          <li><a href="/login">Sign In</a></li>
        </ul>
      </div>

      <div className="footer__links">
        <h3>Company</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>

    </div>

    <div className="footer__bottom">
      <p>© 2026 Hirely. All rights reserved.</p>

      <p>
        Made with <i className="bi bi-heart-fill"></i> for your career journey.
      </p>
    </div>

  </div>
</footer>

</>

}

export default Footer