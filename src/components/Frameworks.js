import React, { Component } from 'react'

import { MediaBox } from 'react-materialize'

const Frameworks = (props) => {
  return(
    <div style={frameContStyle}>
      <div className="card-panel text" style={textContStyle}>
        <h3 style={titleStyle}>Frameworks</h3>
        <hr/>
        <div style={logoStyles}>
        {[
          { image: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
            title: 'React',
          },
          { image: "https://dcresource.biz/wp-content/uploads/2016/03/ruby_on_rails.png",
            title: 'Rails',
            width: '12rem'
          },
          { image: "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
            title: 'Bootstrap',
          },
        ].map(src => (
            <div src={src.title}>
              <img src={src.image} style={imgStyle} alt={src.title}/>
              <h6 className=''>{src.title}</h6>
            </div>
        ))}
        </div>
        <div style={logoStyles2}>
        {[
          { image: "https://seeklogo.com/images/M/material-ui-logo-527EE4ADD9-seeklogo.com.png",
            title: 'Material UI',
          },
          { image: "https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png",
            title: 'Materialize',
          },
        ].map(src => (
            <div src={src.title}>
              <img src={src.image} style={imgStyle} alt={src.title}/>
              <h6 className=''>{src.title}</h6>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Frameworks


let frameContStyle = {
  display: 'flex',
  justifyContent: 'center',
}

let titleStyle = {
  display: 'inline-block',
  margin: '0'
}

let textContStyle = {
  width: '60vw'
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
  display: 'inline-flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap'
}

let imgStyle = {
  height: '3rem',
  margin: '0 5vw 0 5vw'
}
