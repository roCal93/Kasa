import React from 'react'
import { useParams } from 'react-router'
import SlideShow from '../../components/slideShow'
import HouseInfo from '../../components/HouseInfo'

const HousingPage = () => {
  const { id } = useParams()

  return (
    <div className="housingPage">
      <SlideShow id={id} />
      <HouseInfo id={id} />
    </div>
  )
}

export default HousingPage
