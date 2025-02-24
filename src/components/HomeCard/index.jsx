import React from 'react'
import { kasaList } from '../../kasaList'
import { Link } from 'react-router'

const HomeCard = () => {
  return (
    <>
      <div className="cardContainer">
        <ul className="cardList">
          {kasaList.map((kasa) => (
            <Link
              to={`/housing-page/${kasa.id}`}
              className="card"
              key={kasa.id}
            >
              <img src={kasa.cover} />
              <h3>{kasa.title}</h3>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default HomeCard
