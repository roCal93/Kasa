import React from 'react'
import Banner from '../../components/Banner'
import HomeCard from '../../components/homeCard'

const Home = () => {
  return (
    <div className="home">
      <Banner aboutUs={false} />
      <HomeCard />
    </div>
  )
}

export default Home
