import React from 'react'

// Component that displays a tag for each element in the list
const Tags = (props) => {
  return (
    <div>
      <ul className="houseInfo__tagList">
        {props.tags.map((tag) => (
          <li className="houseInfo__tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
