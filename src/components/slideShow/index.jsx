import React, { useState, useEffect } from 'react'
import { kasaList } from '../../kasaList'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const SlideShow = (props) => {
  const houseInfo = kasaList.filter((house) => house.id === `${props.id}`)
  const numberOfPictures =
    houseInfo.length > 0 ? houseInfo[0].pictures.length : 0
  let [index, setindex] = useState(0)
  const [showNext, setShowNext] = useState(false)
  const oneMore = () => {
    setShowNext(false)
    setTimeout(() => {
      index !== numberOfPictures - 1
        ? setindex(index + 1)
        : setindex((index = 0))
    }, 500)
  }
  const oneLess = () => {
    setShowNext(false)
    setTimeout(() => {
      index !== 0 ? setindex(index - 1) : setindex(numberOfPictures - 1)
    }, 500)
  }

  useEffect(() => {
    setShowNext(true)
  }, [index])

  return (
    <div className="slideContent">
      {houseInfo.map((house) => (
        <ul key={house.id}>
          <li className="slideShow">
            <img
              className={`slide ${showNext ? 'show' : ''}`}
              src={house.pictures[index]}
            />
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
