import React from 'react'

// Component that displays house reviews in the form of a star.
const Rating = (props) => {
  const ratingValue = props.ratingValue
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="rating">
      {range.map((value) => (
        <i
          key={value}
          className={`fa-solid fa-star ${
            ratingValue >= value ? 'star__full' : 'star'
          }`}
        />
      ))}
    </div>
  )
}

export default Rating
