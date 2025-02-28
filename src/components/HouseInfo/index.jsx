import React from 'react'
import { kasaList } from '../../kasaList'
import Rating from '../rating'
import Collapsible from '../collapsible'
import ErrorMessage from '../errorMessage'

// Component that displays selected house data.
const HouseInfo = (props) => {
  const selectedHouse = kasaList.find((house) => house.id === `${props.id}`)
  if (!selectedHouse) return <ErrorMessage message="Maison introuvable" />
  return (
    <div>
      <div className="houseInfo">
        <div>
          <h2 className="houseInfo__title">{selectedHouse.title}</h2>
          <h3 className="houseInfo__location">{selectedHouse.location}</h3>
          <ul className="houseInfo__tagList">
            {selectedHouse.tags.map((tag) => (
              <li className="houseInfo__tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="houseInfo__hostRating">
          <div className="houseInfo__host">
            <h4 className="houseInfo__host--name">{selectedHouse.host.name}</h4>
            <img
              className="houseInfo__host--img"
              src={selectedHouse.host.picture}
            />
          </div>
          <Rating ratingValue={selectedHouse.rating} />
        </div>
      </div>
      <div className="houseInfo__collapsible">
        <Collapsible
          id="1"
          title="Description"
          content={selectedHouse.description}
        />
        <Collapsible
          id="2"
          title="Équipments"
          content={selectedHouse.equipments}
        />
      </div>
    </div>
  )
}

export default HouseInfo
