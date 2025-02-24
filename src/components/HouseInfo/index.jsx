import React from 'react'
import { kasaList } from '../../kasaList'
const HouseInfo = (props) => {
  const houseInfo = kasaList.filter((house) => house.id === `${props.id}`)
  return (
    <>
      {houseInfo.map((house) => (
        <h2>{house.title}</h2>
      ))}
    </>
  )
}

export default HouseInfo
