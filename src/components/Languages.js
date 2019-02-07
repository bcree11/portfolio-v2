import React, { Component } from 'react'

const Languages = (props) => {
  const base = '../img/skillsLogos/'
  return(
    <div style={langContStyle}>
      <div className="card-panel text" style={textContStyle}>
        <h3 style={titleStyle}>Languages</h3>
        <hr/>
        <div style={logoStyles}>
        {[
          { image: "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
            title: 'Javascript',
          },
          { image: "https://seeklogo.com/images/R/ruby-logo-087AF79367-seeklogo.com.jpg",
            title: 'Ruby'
          },
        ].map(src => (
            <div src={src.title}>
              <img src={src.image} style={imgStyle} alt={src.title}/>
              <h5 className='text-transform'>{src.title}</h5>
            </div>
        ))}
        </div>
        <div style={logoStyles2}>
        {[
          { image: "https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png",
            title: 'CSS',
          },
          { image: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
            title: 'HTML',
          },
        ].map(src => (
            <div src={src.title}>
              <img src={src.image} style={imgStyle} alt={src.title}/>
              <h5 className='text-transform'>{src.title}</h5>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Languages

let langContStyle = {
  display: 'flex',
  justifyContent: 'center',
}

let titleStyle = {
  display: 'inline-block',
  margin: '0'
}

let textContStyle = {
  width: '60vw',
}

let logoStyles = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap'
}

let logoStyles2 = {
  marginTop: '3rem',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap'
}


let imgStyle = {
  height: '7rem',
  margin: '0 5vw 0 5vw'
}
