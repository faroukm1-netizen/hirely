import { useEffect, useState } from "react"
import type { JobCardInterface } from "../../types/JobCard"
import { getCompany } from "../../Services/CompanyCardService"

function CompaniesSearch(){

    const [companies,setCompanies] = useState<JobCardInterface[]>([])
const [input,setInput] = useState<string>('')

useEffect(()=>{
getCompany().then(setCompanies)
},[])

 const filteredCompanies = companies.filter((company)=>company.company.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    return <>
    
    <section className="companies-search">
  <div className="container">

    <div className="companies-search__form">

      <div className="companies-search__field">
        <i className="bi bi-search"></i>

        <div>
          <label htmlFor="company-search">
            Search Companies
          </label>

          <input
            type="search"
            id="company-search"
            placeholder="Company name..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
        className="companies-search__button"
      >
        <i className="bi bi-search"></i>
        Search
      </button>

    </div>

  </div>
</section>
    

<section className="companies-results">
  <div className="container">

    <div className="companies-results__header">
      <div>
        <h2 className="companies-results__title">
          Top Companies
        </h2>
        <p className="companies-results__description">
          Explore leading companies and discover your next opportunity.
        </p>
      </div>

      <span className="companies-results__count">
        {filteredCompanies.length}
      </span>
    </div>

    <div className="companies-results__grid">

{ filteredCompanies.length > 0? filteredCompanies.map((company)=> 
      <article className="company-card" key={company.id}>
        <div className="company-card__logo">
         <span>{company.company?.charAt(0).toUpperCase()}</span>
        </div>

        <div className="company-card__info">
          <h3 className="company-card__name">{company.company}</h3>
          <span className="company-card__category">
            {company.position}
          </span>
        </div>

        <div className="company-card__jobs">
          <i className="bi bi-briefcase"></i>
          <span>12 Open Jobs</span>
        </div>

        <a href="/jobs" className="company-card__link">
          View Jobs
          <i className="bi bi-arrow-up-right"></i>
        </a>
      </article>
 ): (
<div className="companies-results__empty">
  <div className="companies-results__empty-icon">
    <i className="bi bi-buildings"></i>
  </div>

  <h3>No Companies Found</h3>

  <p>
    We couldn't find any companies matching your search.
    Try searching with a different company name.
  </p>
</div>
) }

    </div>
  </div>
</section>

    </>


}

export default CompaniesSearch