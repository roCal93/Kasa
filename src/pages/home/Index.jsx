import React from 'react'
import Banner from '../../components/Banner'
import HomeCard from '../../components/homeCard'

//This page displays the home page with a banner and cards for the various houses.
const Home = () => {
  return (
    <div className="home">
      <Banner aboutUs={false} />
      <HomeCard />
    </div>
  )
}

export default Home
