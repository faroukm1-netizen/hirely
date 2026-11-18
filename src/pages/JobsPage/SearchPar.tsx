import { useEffect, useState } from "react"
import type { JobCardInterface } from "../../types/JobCard"
import { getSearch } from "../../Services/SearchparService"

function SearchPar(){

const [jobs,setJobs] = useState<JobCardInterface[]>([])
const [input,setInput] = useState<string>('')

useEffect(()=>{
    getSearch().then(setJobs)
},[])

const SearchFiltered = ()=>{
 
return jobs.filter((job)=> job.company.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||  job.position.toLocaleLowerCase().includes(input.toLocaleLowerCase()) )

}


return <>

<section className="jobs-search">
  <div className="container">
    <div className="jobs-search__form">

      <div className="jobs-search__field">
        <i className="bi bi-search"></i>

        <div>
          <label htmlFor="job-search">Search Jobs</label>
          <input
            type="search"
            id="job-search"
            placeholder="Job title or company..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
        </div>
      </div>

      <button type="button" className="jobs-search__button">
        <i className="bi bi-search"></i>
        Search Jobs
      </button>

    </div>
  </div>
</section>

<section className="jobs-results">
  <div className="container">

    <div className="jobs-results__header">
      <div>
        <h2 className="jobs-results__title">Search Results</h2>
        <p className="jobs-results__description">
          Find the right opportunity for your next career move.
        </p>
      </div>

      <span className="jobs-results__count">
        {SearchFiltered().length} Jobs Found
      </span>
    </div>

    <div className="jobs-results__grid">

      {/* Job Cards */}

      {/* Empty State */}
    
    {SearchFiltered().length > 0 ? (SearchFiltered().map((card)=> 
<article className="job-card" key={card.id}>

  <div className="job-card__top">

     <div className="job-card__company-logo">
      {card.company_logo ? (
        <img src={card.company_logo} alt={card.company} />
      ) : (
        <span>{card.company?.charAt(0).toUpperCase()}</span>
      )}
    </div>

    <span className="job-card__date">
      <i className="bi bi-clock"></i>
      {card.date}
    </span>

  </div>

  <div className="job-card__info">

    <h3 className="job-card__position">
      {card.position}
    </h3>

    <p className="job-card__company">
      {card.company}
    </p>

    <div className="job-card__details">
      <span>
        <i className="bi bi-geo-alt"></i>
     {card.location || "Remote" }
      </span>
    </div>

  </div>

  <div className="job-card__tags">
    {card.tags?.slice(0,3).map((tag)=> <span key={tag}>{tag}</span> )}
  </div>

  <div className="job-card__footer">
    <a href={card.url} className="job-card__apply">
      View Job
      <i className="bi bi-arrow-up-right"></i>
    </a>
  </div>

</article>
  )) : (  <div className="jobs-results__empty">
        <i className="bi bi-search"></i>
        <h3>No Jobs Found</h3>
        <p>Try searching with another job title or company name.</p>
      </div>) } 

      

    </div>

  </div>
</section>


</>

}

export default SearchPar

