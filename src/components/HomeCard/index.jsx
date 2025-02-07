import React from 'react'
import { kasaList } from '../../kasaList'

const HomeCard = () => {
  return (
    <div className="cardContainer">
      <ul>
        {kasaList.map((kasa) => (
          <li className="card" key={kasa.id}>
            <img src={kasa.cover} />
            <h2>{kasa.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeCard
