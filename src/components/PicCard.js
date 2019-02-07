import React, { Component } from 'react'

const PicCard = (props) => {
  return(
    <div style={picContStyle}>
      <div class="card" style={picStyle}>
        <div class="card-image">
          <img src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/StoryArc/1561/1561._SX400_QL80_TTD_.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default PicCard

let picContStyle = {
  display: 'flex',
  justifyContent: 'center',
}

let picStyle = {
  height: '30vw',
  width: '30vw',
}
