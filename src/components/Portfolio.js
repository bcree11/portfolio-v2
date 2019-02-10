import React, { Component } from 'react'

export default class Portfolio extends Component{
  render(){
    return(
      <div>
        {[
          { name:'',
            image:'',
            description:'',
          },
        ].map((src, index) => (
          <div class="card hoverable" style={{width:'20rem'}}>
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="https://material-components-web.appspot.com/images/photos/2x3/4.jpg"/>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">{src.name}</span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">{src.name}<i class="material-icons right">close</i></span>
              <p>{src.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
