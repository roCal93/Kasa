import React, { useState } from 'react'
import { kasaList } from '../../kasaList'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const SlideShow = (props) => {
  const houseInfo = kasaList.filter((house) => house.id === `${props.id}`)
  const numberOfPictures =
    houseInfo.length > 0 ? houseInfo[0].pictures.length - 1 : 0
  let [index, setindex] = useState(0)
  const oneMore = () => {
    index !== numberOfPictures ? setindex(index + 1) : setindex((index = 0))
  }
  const oneLess = () => {
    index !== 0 ? setindex(index - 1) : setindex(numberOfPictures)
  }

  return (
    <>
      {houseInfo.map((house) => (
        <div className="slideShow">
          <img className="slide" src={house.pictures[index]} />
          <div className={numberOfPictures === 0 ? 'hide' : ''}>
            <img className="arrow__left" src={leftArrow} onClick={oneLess} />
            <img className="arrow__right" src={rightArrow} onClick={oneMore} />
            <p className="counter">
              {index + 1}/{numberOfPictures + 1}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default SlideShow
