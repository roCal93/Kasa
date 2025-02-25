import React from 'react'
import { kasaList } from '../../kasaList'
import Rating from '../rating'
import Collapsible from '../collapsible'
const HouseInfo = (props) => {
  const houseInfo = kasaList.filter((house) => house.id === `${props.id}`)
  return (
    <div>
      {houseInfo.map((house) => (
        <ul key={house.id}>
          <li>
            <div className="houseInfo">
              <div>
                <h2 className="houseInfo_title">{house.title}</h2>
                <h3 className="houseInfo_location">{house.location}</h3>
                <ul className="houseInfo_tagList">
                  {house.tags.map((tag) => (
                    <li className="houseInfo_tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="houseInfo_hostRating">
                <div className="houseInfo_host">
                  <h4 className="houseInfo_host-name">{house.host.name}</h4>
                  <img
                    className="houseInfo_host-img"
                    src={house.host.picture}
                  />
                </div>
                <Rating ratingValue={house.rating} />
              </div>
            </div>
            <div className="houseInfo_collapsible">
              <Collapsible
                id="1"
                title="Description"
                content={house.description}
              />
              <Collapsible
                id="2"
                title="Équipments"
                content={house.equipments}
              />
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default HouseInfo
