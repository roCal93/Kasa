import React, { useState } from 'react'

// Component that displays in a collapsible the content passed to it as props
const Collapsible = (props) => {
  const contentList = props.content
  const [showMore, setShowMore] = useState({ [props.id]: false })

  const toggleContent = (id) => {
    // Function to update showmore state
    setShowMore((prevShowMore) => {
      // Creates a new version of prevShowMore object
      const updatedShowMore = {
        ...prevShowMore, // Copies all the previous states
      }
      // Modifies the property that matches the id. If true it returns false and vice versa
      updatedShowMore[id] = !prevShowMore[id]
      // Returns the updated object
      return updatedShowMore
    })
  }

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
        {/* If content list is an array, it will be displayed as a list, otherwise the content will simply be displayed.
         */}
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
