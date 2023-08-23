import React from  'react'
import "./styles/Stats.css"
import GitHubCalendar from 'react-github-calendar';










function Stats() {

 

  return (
    <React.Fragment>

          <div className="stats-section" id="stats">

            <div className="Stats-inside inside">

                      <h1>Stats  </h1>
                      <div className="stats-container">
                           <div className="frontend">
                                    <p>1000+ <br /> hours of coding</p>
                           </div>
                           <div className="backend">

                             <p> 300+ <br /> Dsa Problems </p>

                           </div>
                           <div className="dsa">

                                    <p>100+ <br /> Hours of Soft Skills </p>
                           </div>

                      </div>

                       <div className="react-activity-calendar">

                                  <h2 style={{textAlign:"center"}}>Github  </h2>
                                   <div className="calendar">
                                   <GitHubCalendar username="surajbhan-3" />
                                   
                                   </div>
                         
                       </div>
                       

        <div className="regular">
          <div className="git-card">
            <img
              width="95%"
              height="100%"
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=surajbhan-3&theme=react&hide_border=true&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
              alt="stat-card"
            />
          </div>
            
        

          <div className="git-card git-3">
            <img
              width="95%"
              height="100%"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=surajbhan-3&theme=react&count_private=true"
              alt="top_languages"
            />
          </div>



        </div>

        <div className="git-card" id="most-lang">
            <img
              width="55%"
              height="55%"
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=surajbhan-3&theme=react&show_icons=true&locale=en&layout=compact"
              alt="surajbhan-3"
            />
          </div> 
      </div>
          </div>

    </React.Fragment>
  )
}

export default Stats