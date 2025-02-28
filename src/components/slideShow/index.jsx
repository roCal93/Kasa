import React, { useState, useEffect } from 'react'
import { kasaList } from '../../kasaList'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import ErrorMessage from '../errorMessage'

// This component is used to display images of houses selected in a slideshow.
const SlideShow = (props) => {
  const selectedHouse = kasaList.filter((house) => house.id === `${props.id}`)
  if (!selectedHouse || selectedHouse.length === 0) {
    return <ErrorMessage message="Maison non trouvée." />
  }
  const numberOfPictures =
    selectedHouse.length > 0 ? selectedHouse[0].pictures.length : 0
  if (numberOfPictures === 0) {
    return <ErrorMessage message="Aucune image disponible." />
  }

  const [index, setindex] = useState(0)
  const [showNext, setShowNext] = useState(false)

  // Function that allows me to display the next image of my array.
  const oneMore = () => {
    setShowNext(false)
    setTimeout(() => {
      setindex((prevIndex) =>
        prevIndex !== numberOfPictures - 1 ? prevIndex + 1 : 0
      )
    }, 300)
  }

  // Function that allows me to display the previous image of my array.
  const oneLess = () => {
    setShowNext(false)
    setTimeout(() => {
      setindex((prevIndex) =>
        prevIndex !== 0 ? prevIndex - 1 : numberOfPictures - 1
      )
    }, 300)
  }

  // Function that set showNext at true every time index change.
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
            />
            {/* If there is only one picture arrows and counter will not appear */}
            {numberOfPictures > 1 && (
              <div>
                <img
                  className="arrow__left"
                  src={leftArrow}
                  onClick={oneLess}
                />
                <img
                  className="arrow__right"
                  src={rightArrow}
                  onClick={oneMore}
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
