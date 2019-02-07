import React, { Component } from 'react'

const OtherSkills = (props) => {
  return(
    <div style={divStyle}>
      <div style={contStyle}>
          <div className="card-panel text" style={otherContStyle}>
            <h3 style={titleStyle}>Databases</h3>
            <hr/>
            <div style={logoStyles}>
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
                  <h5 className='text-transform'>{src.title}</h5>
                </div>
            ))}
            </div>
          </div>
          <div className="card-panel text" style={otherContStyle}>
            <h3 style={titleStyle}>Testing</h3>
            <hr/>
          </div>
          <div className="card-panel text" style={otherContStyle}>
            <h3 style={titleStyle}>Tools</h3>
            <hr/>
            <div>
              <img class="skill-logo" src={require("../img/skillsLogos/css.png")} alt="bootstrap img"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default OtherSkills

let divStyle = {
  display: 'flex',
  justifyContent: 'center'
}

let contStyle = {
  width: '80vw',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

let titleStyle = {
  display: 'inline-block',
  margin: '0'
}

let otherContStyle = {
  width: '25vw'
}

let logoStyles = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row'
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
