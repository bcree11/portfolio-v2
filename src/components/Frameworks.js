import React, { Component } from 'react'

import { MediaBox } from 'react-materialize'

import '../stylesheets/Skills.css'

const Frameworks = (props) => {
  return(
    <div className='skills-width'>
      <div className="card skills-contStyle">
        <h3 className='skills-title visuallyhidden'>Frameworks ={' ['}</h3>
        <h3 className='skills-title visuallyhidden2'>Frameworks</h3>
          <div className='skills-block'>
          {[
            { name: "\"React\",",
              logo: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
            },
            { name: "\"Rails\",",
              logo: "https://dcresource.biz/wp-content/uploads/2016/03/ruby_on_rails.png",
            },
            { name: "\"Material UI\",",
              logo: "https://seeklogo.com/images/M/material-ui-logo-527EE4ADD9-seeklogo.com.png",
            },
            { name: "\"Materialize\",",
              logo: "https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png",
            },
            { name: "\"Bootstrap\",",
              logo: "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
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

export default Frameworks
