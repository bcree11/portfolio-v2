import React, { Component } from 'react'

import { MediaBox } from 'react-materialize'

import '../stylesheets/Skills.css'

const OtherSkills = (props) => {
  return(
    <div className='skills-width'>
      <div className="card skills-contStyle">
        <h4 className='skills-title visuallyhidden'>Other Skills ={' ['}</h4>
        <h4 className='skills-title visuallyhidden2'>Other Skills</h4>
          <div className='skills-block'>
          {[
            { name: "\"Github\",",
              logo: "https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png",
            },
            { name: "\"Photoshop\",",
              logo: "https://seeklogo.com/images/A/adobe-photoshop-cc-logo-CBD0AAA3A7-seeklogo.com.png",
            },
            { name: "\"GIMP\",",
              logo: "https://seeklogo.com/images/G/gimp-logo-4D0E1F6FF5-seeklogo.com.jpg",
            },
            /*{ name: "\"Materialize\",",
              logo: "https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png",
            },
            { name: "\"Bootstrap\",",
              logo: "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
            },*/
          ].map(src => (
            <div className='skills-iconCont'>
              <div className='skills-frame'>
                <h6 className='skills-marginR visuallyhidden'>{'{ '}name:</h6>
                <h5>{src.name}</h5>
              </div>
              <div className='skills-frame'>
                <h6 className='skills-logoText visuallyhidden'>logo:</h6>
                <img className='skills-logos' src={src.logo}  alt={src.name}/>
                <h6 className='skills-frame visuallyhidden'>{' }'} ,</h6>
              </div>
            </div>
          ))}
          <h4 className='skills-bracket skills-title visuallyhidden'>{ ']'}</h4>
        </div>
      </div>
    </div>
  )
}

export default OtherSkills
