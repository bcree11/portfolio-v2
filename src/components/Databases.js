import React, { Component } from 'react'

import '../stylesheets/Skills.css'

const Databases = (props) => {
  return(
    <div className='skills-width'>
      <div className="card z-depth-3 skills-contStyle">
        <h3 className='skills-title visuallyhidden'>Databases ={' ['}</h3>
        <h3 className='skills-title visuallyhidden2'>Databases</h3>
        <div className='skills-block'>
        {[
          { name: "\"PostgreSQL\",",
            logo: "https://seeklogo.com/images/P/postqresql-logo-AD0E066492-seeklogo.com.png",
          },
          /*{ name: "\"MySQL\",",
            logo: "https://seeklogo.com/images/M/mysql-logo-B047FB7790-seeklogo.com.png",
          },*/
        ].map((src, index) => (
          <div key={index} className='skills-iconCont'>
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

export default Databases
