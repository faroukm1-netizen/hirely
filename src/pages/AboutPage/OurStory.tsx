function OurStory(){
    return <>
    
<section className="about-story">
  <div className="container">
    <div className="about-story__wrapper">

      <div className="about-story__image">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
          alt="Team working together"
        />

       
      </div>

      <div className="about-story__content">

        <span className="about-story__subtitle">
          Our Story
        </span>

        <h2 className="about-story__title">
          Making Job Searching
          <span> Simple & Accessible</span>
        </h2>

        <p className="about-story__description">
          Hirely was created with one simple goal:
          to make finding the right job easier for everyone.
          We connect talented professionals with companies
          offering exciting opportunities around the world.
        </p>

        <p className="about-story__description">
          Whether you're starting your career or looking
          for your next big opportunity, Hirely helps you
          take the next step with confidence.
        </p>

        <div className="about-story__stats">

          <div className="about-story__stat">
            <strong>1000+</strong>
            <span>Job Opportunities</span>
          </div>

          <div className="about-story__stat">
            <strong>500+</strong>
            <span>Companies</span>
          </div>

        </div>

        <a href="/jobs" className="about-story__button">
          Explore Jobs
          <i className="bi bi-arrow-up-right"></i>
        </a>

      </div>

    </div>
  </div>
</section>
</>
}

export default OurStory