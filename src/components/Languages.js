import React, { Component } from 'react'

import '../stylesheets/Skills.css'

const Languages = (props) => {
  const base = '../img/skillsLogos/'
  return(
      <div className='skills-width'>
          <div className="card skills-contStyle">
            <h3 className='skills-title visuallyhidden'>Languages ={' ['}</h3>
            <h3 className='skills-title visuallyhidden2'>Languages</h3>
              <div className='skills-block'>
              {[
                { name: "\"Javascript\",",
                  logo: "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
                },
                { name: "\"Ruby\",",
                  logo: "https://seeklogo.com/images/R/ruby-logo-087AF79367-seeklogo.com.jpg",
                },
                { name: "\"CSS\",",
                  logo: "https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png",
                },
                { name: "\"HTML\",",
                  logo: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
                },
              ].map(src => (
                <div className='skills-iconCont'>
                  <div className='skills-frame'>
                    <h6 className='skills-marginR visuallyhidden'>{'{ '}name:</h6>
                    <h5>{src.name}</h5>
                  </div>
                  <div className='skills-frame'>
                    <h6 className='skills-logoText visuallyhidden'>logo:</h6>
                    <img className='skills-logos' src={src.logo} alt={src.name}/>
                    <h6 className='skills-frame visuallyhidden'>{' }'} ,</h6>
                  </div>
                </div>
              ))}
              <h3 className='skills-title skills-bracket visuallyhidden'>{ ']'}</h3>
            </div>
          </div>
        </div>
  )
}

export default Languages
