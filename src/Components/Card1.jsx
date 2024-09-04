function CardComponent() {
    return (
      <>
        <h3>Hello, this is for card components</h3>
        <div className="job">
        <div className="wrapper ">
          <input type="radio" name="slider" id="tab-1" />
          <input type="radio" name="slider" id="tab-2" defaultChecked />
  
          {/* this above is for default value */}
          <input type="radio" name="slider" id="tab-3" />
          <header>
            <label htmlFor="tab-1" className="tab-1">Skills</label>
            <label htmlFor="tab-2" className="tab-2">Description</label>
            <label htmlFor="tab-3" className="tab-3">Company </label>
            <div className="slider"></div>
          </header>
          <div className="card-area">
            <div className="cards">
              <div className="row row-1">
                <div className="price-details">
                  {/* <span className="price">19</span> */}
                  <h2><b>Skills Required</b> </h2>
                </div>
                <ul className="features">
                  <li><i className="fas fa-check"></i><span><b>React.js</b></span></li>
                  
                  <li><i className="fas fa-check"></i><span><b>Tailwind Css</b></span></li>
                 
                  <li><i className="fas fa-check"></i><span><b>Mongo DB</b></span></li>
                  
                  <li><i className="fas fa-check"></i><span><b>Basic knowledge of System Design</b></span></li>
                  <li><i className="fas fa-check"></i><span><b>Good Communication Skills </b></span></li>
                </ul>
              </div>
              <div className="row">
                <div className="price-details">
                  {/* <span className="price">99</span> */}
                  <br></br>
                  <p><b>Job Position :</b> Frontend Engineer </p>
                </div>
                <ul className="features">
                  <li><i className="fas fa-check"></i><span><b>Job-Type:</b>   Remote </span></li>
                  <li><i className="fas fa-check"></i><span><b>Stipened:</b> Around 50k-60k</span></li>
                  <li><i className="fas fa-check"></i><span><b>Deadline:</b> 15 September,2025</span></li>
                  <li><i className="fas fa-check"></i><span><b>Role</b> Frontend Developer</span></li>
                  <li><i className="fas fa-check"></i><span><b>Work -Hours</b> 10A.M -  3P.M</span></li>
                </ul>
              </div>
              <div className="row">
                <div className="price-details">
                  {/* <span className="price">49</span> */}
  
                  <h2>About Company</h2>
                </div>
                <ul className="features">
                  <li><i className="fas fa-check"></i><span><b>CEO:</b> John Doe, visionary leader.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Established:</b>  Founded in 2010.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Company-Type </b>  Product-focused tech company.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Headquarters:</b>  Based in San Francisco.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Industry:</b>  Specializes in software development.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <button>Apply Now </button>
        </div>
  
        {/* hdjsh */}
        
        <div className="wrapper">
          <input type="radio" name="slider" id="tab-7" />
          <input type="radio" name="slider" id="tab-8" defaultChecked />
  
          {/* this above is for default value */}
          <input type="radio" name="slider" id="tab-9" />
          <header>
            <label htmlFor="tab-7" className="tab-7">Skills</label>
            <label htmlFor="tab-8" className="tab-8">Description</label>
            <label htmlFor="tab-9" className="tab-9">Company </label>
            <div className="slider"></div>
          </header>
          <div className="card-area">
            <div className="cards">
              <div className="row row-1">
                <div className="price-details">
                  {/* <span className="price">19</span> */}
                  <h2><b>Skills Required</b> </h2>
                </div>
                <ul className="features">
                  <li><i className="fas fa-check"></i><span><b>React.js</b></span></li>
                  
                  <li><i className="fas fa-check"></i><span><b>Tailwind Css</b></span></li>
                 
                  <li><i className="fas fa-check"></i><span><b>Mongo DB</b></span></li>
                  
                  <li><i className="fas fa-check"></i><span><b>Basic knowledge of System Design</b></span></li>
                  <li><i className="fas fa-check"></i><span><b>Good Communication Skills </b></span></li>
                </ul>
              </div>
              <div className="row">
                <div className="price-details">
                  {/* <span className="price">99</span> */}
                  <br></br>
                  <p><b>Job Position :</b> Frontend Engineer </p>
                </div>
                <ul className="features">
                  <li><i className="fas fa-check"></i><span><b>Job-Type:</b>   Remote </span></li>
                  <li><i className="fas fa-check"></i><span><b>Stipened:</b> Around 50k-60k</span></li>
                  <li><i className="fas fa-check"></i><span><b>Deadline:</b> 15 September,2025</span></li>
                  <li><i className="fas fa-check"></i><span><b>Role</b> Frontend Developer</span></li>
                  <li><i className="fas fa-check"></i><span><b>Work -Hours</b> 10A.M -  3P.M</span></li>
                </ul>
              </div>
              <div className="row">
                <div className="price-details">
                  {/* <span className="price">49</span> */}
  
                  <h2>About Company</h2>
                </div>
                <ul className="features">
                  <li><i className="fas fa-check"></i><span><b>CEO:</b> John Doe, visionary leader.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Established:</b>  Founded in 2010.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Company-Type </b>  Product-focused tech company.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Headquarters:</b>  Based in San Francisco.</span></li>
                  <li><i className="fas fa-check"></i><span><b>Industry:</b>  Specializes in software development.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <button>Choose plan</button>
        </div>
        </div>
      </>
    );
  }
  
  export default CardComponent;
  