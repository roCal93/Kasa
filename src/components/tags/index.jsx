import React from 'react'

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
