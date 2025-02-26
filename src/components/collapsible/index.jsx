import React, { useState } from 'react'

const Collapsible = (props) => {
  const [showMore, setShowMore] = useState({})
  const toggleContent = (id) => {
    // Function to update showmore state
    setShowMore((prevShowMore) => {
      // Create a new version of prevShowMore object
      const updatedShowMore = {
        ...prevShowMore, // Copie all the before state
      }
      // Modify the property who match the id if its true it return false and inverse
      updatedShowMore[id] = !prevShowMore[id]
      // return the uptaded object
      return updatedShowMore
    })
  }
  const contentList = props.content
  return (
    <div className="collapsible">
      <div className="collapsible__title">
        <h2>{props.title}</h2>
        <button onClick={() => toggleContent(props.id)}>
          <i
            className={
              showMore[props.id]
                ? 'fa-solid fa-chevron-up rotated'
                : 'fa-solid fa-chevron-up'
            }
          ></i>
        </button>
      </div>
      <p
        className={
          showMore[props.id]
            ? ' collapsible__content open'
            : 'collapsible__content close'
        }
      >
        {Array.isArray(contentList) ? (
          contentList.map((item) => (
            <span key={item}>
              {item}
              <br />
            </span>
          ))
        ) : (
          <span>{contentList}</span>
        )}
      </p>
    </div>
  )
}

export default Collapsible
