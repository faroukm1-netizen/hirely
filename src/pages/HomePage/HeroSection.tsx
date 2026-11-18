function HeroSection(){

return <>

<section className="hero">
  <div className="container">
    <div className="hero__container">

      {/* Hero Content */}
      <div className="hero__content">

        <span className="hero__badge">
          <i className="bi bi-stars"></i>
          Your Career Starts Here
        </span>

        <h1 className="hero__title">
          Find Your
          <span> Dream Job </span>
          And Build Your Future
        </h1>

        <p className="hero__description">
          Discover thousands of job opportunities from top companies.
          Take the next step in your career journey with Hirely.
        </p>

        <div className="hero__actions">
          <a href="/jobs" className="hero__primary-btn">
            Explore Jobs
            <i className="bi bi-arrow-up-right"></i>
          </a>

          <a href="/about" className="hero__secondary-btn">
            Learn More
            <i className="bi bi-play-circle"></i>
          </a>
        </div>

        {/* Statistics */}
        <div className="hero__stats">

          <div className="hero__stat">
            <h3>10K+</h3>
            <p>Active Jobs</p>
          </div>

          <div className="hero__stat">
            <h3>5K+</h3>
            <p>Companies</p>
          </div>

          <div className="hero__stat">
            <h3>20K+</h3>
            <p>Job Seekers</p>
          </div>

        </div>
      </div>

      {/* Hero Visual */}
      <div className="hero__visual">

        <div className="hero__circle"></div>

        <div className="hero__main-card">

          <div className="hero__card-header">
            <div>
              <span>Featured Opportunity</span>
              <h3>Senior UI Designer</h3>
            </div>

            <span className="hero__bookmark">
              <i className="bi bi-bookmark"></i>
            </span>
          </div>

          <div className="hero__company">
            <div className="hero__company-icon">
              <i className="bi bi-building"></i>
            </div>

            <div>
              <h4>Creative Studio</h4>
              <span>Alexandria, Egypt</span>
            </div>
          </div>

          <div className="hero__tags">
            <span>Full Time</span>
            <span>Remote</span>
            <span>Design</span>
          </div>

          <div className="hero__card-footer">
            <div>
              <h3>$2,500 <span>/ month</span></h3>
              <p>Posted 2 days ago</p>
            </div>

            <a href="/jobs" aria-label="Explore this job">
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

        </div>

        {/* Floating Card */}
        <div className="hero__floating-card">
          <div className="hero__floating-icon">
            <i className="bi bi-check-lg"></i>
          </div>

          <div>
            <h4>Application Sent!</h4>
            <p>Your dream job is closer.</p>
          </div>
        </div>

        <div className="hero__decoration hero__decoration--one"></div>
        <div className="hero__decoration hero__decoration--two"></div>

      </div>
    </div>
  </div>
</section>

</>


}

export default HeroSection