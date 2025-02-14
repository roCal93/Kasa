import React from 'react'
import { kasaList } from '../../kasaList'

const HomeCard = () => {
  return (
    <div className="cardContainer">
      <ul className="cardList">
        {kasaList.map((kasa) => (
          <li className="card" key={kasa.id}>
            <img src={kasa.cover} />
            <h3>{kasa.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeCard
