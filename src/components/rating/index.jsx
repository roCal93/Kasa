import React from 'react'

const Rating = (props) => {
  const ratingValue = props.ratingValue

  const range = [1, 2, 3, 4, 5]
  return (
    <div className="rating">
      {range.map((rangeElem) =>
        ratingValue >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <i className="fa-solid fa-star star_full"></i>
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            <i className="fa-solid fa-star star"></i>
          </span>
        )
      )}
    </div>
  )
}

export default Rating
