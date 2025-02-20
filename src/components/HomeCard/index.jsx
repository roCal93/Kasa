import React, { useState } from 'react'
import { kasaList } from '../../kasaList'
import HousingForm from '../housingForm'

const HomeCard = () => {
  const [showForm, setShowForm] = useState(false)
  const [id, setId] = useState([])
  const toggle = (id) => {
    setShowForm(!showForm)
    setId(id)
  }
  return (
    <>
      <div className={showForm ? 'close' : 'cardContainer'}>
        <ul className="cardList">
          {kasaList.map((kasa) => (
            <li className="card" key={kasa.id} onClick={() => toggle(kasa.id)}>
              <img src={kasa.cover} />
              <h3>{kasa.title}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className={showForm ? 'housingForm' : 'close'}>
        <HousingForm id={id} />
      </div>
    </>
  )
}

export default HomeCard
