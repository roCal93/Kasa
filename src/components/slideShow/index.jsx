import React, { useState, useEffect } from 'react'
import { kasaList } from '../../kasaList'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import ErrorMessage from '../errorMessage'

// Component that displays images of selected houses in a slideshow
const SlideShow = (props) => {
  const selectedHouse = kasaList.filter((house) => house.id === `${props.id}`)
  const numberOfPictures =
    selectedHouse.length > 0 ? selectedHouse[0].pictures.length : 0
  if (numberOfPictures === 0) {
    return <ErrorMessage message="Aucune image disponible." />
  }

  const [index, setindex] = useState(0)
  const [showNext, setShowNext] = useState(false)

  // Function that allows me to display the next image of my array
  const oneMore = () => {
    setShowNext(false)
    setTimeout(() => {
      setindex((prevIndex) =>
        prevIndex !== numberOfPictures - 1 ? prevIndex + 1 : 0
      )
    }, 300)
  }

  // Function that allows me to display the previous image of my array
  const oneLess = () => {
    setShowNext(false)
    setTimeout(() => {
      setindex((prevIndex) =>
        prevIndex !== 0 ? prevIndex - 1 : numberOfPictures - 1
      )
    }, 300)
  }

  // Function that sets showNext as true at every change of index
  useEffect(() => {
    setShowNext(true)
  }, [index])

  return (
    <div className="slideContent">
      {selectedHouse.map((house) => (
        <ul key={house.id}>
          <li className="slideShow">
            <img
              className={`slide ${showNext ? 'show' : ''}`}
              src={house.pictures[index]}
              alt="Photo du bien"
            />
            {/* If there is only one picture arrows and counter will not appear */}
            {numberOfPictures > 1 && (
              <div>
                <img
                  className="arrow__left"
                  src={leftArrow}
                  onClick={oneLess}
                  alt="flèche de navigation gauche"
                />
                <img
                  className="arrow__right"
                  src={rightArrow}
                  onClick={oneMore}
                  alt="flèche de navigation droite"
                />
                <p className="counter">
                  {index + 1}/{numberOfPictures}
                </p>
              </div>
            )}
          </li>
        </ul>
      ))}
    </div>
  )
}

export default SlideShow
