import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import SlideShow from '../../components/slideShow'
import HouseInfo from '../../components/HouseInfo'
import { kasaList } from '../../kasaList'

//This page displays the photos and information of the selected house
const HousingPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const kasa = kasaList.find((k) => k.id === id)

    if (!kasa) {
      navigate('*')
    }
  }, [id])

  return (
    <div className="housingPage">
      <SlideShow id={id} />
      <HouseInfo id={id} />
    </div>
  )
}

export default HousingPage
