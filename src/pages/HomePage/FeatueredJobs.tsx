import { useEffect, useState } from "react"
import type { JobCardInterface } from "../../types/JobCard"
import { getJob } from "../../Services/JobCardService"

function FeatueredJobs(){

const [jobs,setJobs] = useState<JobCardInterface[]>([])

useEffect(()=>{
getJob().then(setJobs)
},[])

return <>


<section className="featured-jobs">
  <div className="container">

    <div className="featured-jobs__header">
      <div className="featured-jobs__heading">
        <span className="featured-jobs__subtitle">OPPORTUNITIES</span>
        <h2 className="featured-jobs__title">Featured Jobs</h2>
        <p className="featured-jobs__description">
          Discover exciting opportunities from top companies.
        </p>
      </div>

      <a href="/jobs" className="featured-jobs__view-all">
        View All Jobs <i className="bi bi-arrow-up-right"></i>
      </a>
    </div>

    <div className="featured-jobs__grid">

  {jobs.map((job)=>     <article className="featured-jobs__card" key={job.id}>
        <div className="featured-jobs__card-top">
          <div className="featured-jobs__company-logo">
  {job.company_logo ? (
    <img src={job.company_logo} alt={job.company} />
  ) : (
    <span>{job.company?.charAt(0).toUpperCase()}</span>
  )}
</div>

          <button className="featured-jobs__bookmark" type="button">
            <i className="bi bi-bookmark"></i>
          </button>
        </div>

        <div className="featured-jobs__job-info">
          <h3 className="featured-jobs__position">{job.position}</h3>
          <p className="featured-jobs__company">{job.company}</p>

          <div className="featured-jobs__details">
            <span><i className="bi bi-geo-alt"></i> Remote</span>
            <span><i className="bi bi-calendar3"></i> {job.date}</span>
          </div>
        </div>

        <div className="featured-jobs__card-footer">
          <span className="featured-jobs__badge">Remote</span>

          <a href="#" className="featured-jobs__apply">
            Apply Now <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </article>  )}

    </div>
  </div>
</section>


</>


}

export default FeatueredJobs