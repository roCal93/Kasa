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
  return (
    <div>
      <ul className="collapsible">
        {props.list.map((data) => (
          <li key={data.id} className="collapsible__list">
            <div className="collapsible__title">
              <h2>{data.title}</h2>
              <button onClick={() => toggleContent(data.id)}>
                <i
                  className={
                    showMore[data.id]
                      ? 'fa-solid fa-chevron-up rotated'
                      : 'fa-solid fa-chevron-up'
                  }
                ></i>
              </button>
            </div>
            <p className={showMore[data.id] ? 'open' : 'close'}>
              {data.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Collapsible
