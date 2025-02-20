import React from 'react'
import Collapsible from '../collapsible'

const CollapsibleList = (props) => {
  return (
    <div>
      <ul className="collapsible">
        {props.list.map((data) => (
          <li key={data.id}>
            <Collapsible
              id={data.id}
              title={data.title}
              content={data.content}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CollapsibleList
