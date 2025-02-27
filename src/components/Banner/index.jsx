import React from 'react'

const Banner = (props) => {
  const aboutUs = props.aboutUs
  return (
    <div className={aboutUs ? 'banner__aboutUs' : 'banner__intro'}>
      <h1 className="banner__title">
        {aboutUs || 'Chez vous, partout et ailleurs'}{' '}
      </h1>
    </div>
  )
}

export default Banner
