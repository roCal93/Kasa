import React from 'react'
import { kasaList } from '../../kasaList'
import Rating from '../rating'
import Collapsible from '../collapsible'
import ErrorMessage from '../errorMessage'
import Tags from '../tags'
import HostInfo from '../hostInfo'

// Component that displays selected house data
const HouseInfo = (props) => {
  const selectedHouse = kasaList.find((house) => house.id === `${props.id}`)
  if (!selectedHouse) return <ErrorMessage message="Maison introuvable" />
  return (
    <div>
      <div className="houseInfo">
        <div>
          <h2 className="houseInfo__title">{selectedHouse.title}</h2>
          <h3 className="houseInfo__location">{selectedHouse.location}</h3>
          <Tags tags={selectedHouse.tags} />
        </div>
        <div className="houseInfo__hostRating">
          <HostInfo
            name={selectedHouse.host.name}
            picture={selectedHouse.host.picture}
          />
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
          title="Équipements"
          content={selectedHouse.equipments}
        />
      </div>
    </div>
  )
}

export default HouseInfo
