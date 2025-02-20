import React from 'react'
import { kasaList } from '../../kasaList'

const SlideShow = (props) => {
  const houseInfo = kasaList.filter((house) => house.id === `${props.id}`)

  return (
    <div>
      <h1>{props.id}</h1>
      <ul>
        {houseInfo.map((house) => (
          <li key={house.id}>
            <img src={house.pictures[0]} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SlideShow
