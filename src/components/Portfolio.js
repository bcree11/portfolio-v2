import React, { Component } from 'react'

import '../stylesheets/Portfolio.css'

export default class Portfolio extends Component{
  render(){
    return(
      <div>
        <div className='displayGrid'>
          {[
            { name:'',
              image:'',
              description:'Hello',
            },
            { name:'',
              image:'',
              description:'',
            },
            { name:'',
              image:'',
              description:'',
            },
            { name:'',
              image:'',
              description:'',
            },
            { name:'',
              image:'',
              description:'',
            },
            { name:'',
              image:'',
              description:'',
            },

          ].map((src, index) => (
            <div key={index} className="card z-depth-3 hoverable">
              <div className="card-image hoverable">
                <img className='activator' src="https://materializecss.com/images/sample-1.jpg"/>
              </div>
              <div className="card-content hoverable activator">
                <span className="card-title activator grey-text text-darken-4">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
