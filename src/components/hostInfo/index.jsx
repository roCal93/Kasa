import React from 'react'

// Component that displays host name and picture
const HostInfo = (props) => {
  return (
    <div className="houseInfo__host">
      <h4 className="houseInfo__host--name">{props.name}</h4>
      <img
        className="houseInfo__host--img"
        src={props.picture}
        alt={`Image de ${props.name}`}
      />
    </div>
  )
}

export default HostInfo
