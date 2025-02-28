import React from 'react'
import Collapsible from '../collapsible'
import ErrorMessage from '../errorMessage'

// Component that displays for each element of a list a collapsible.
const CollapsibleList = (props) => {
  if (!props.list || !props.list.length) {
    return <ErrorMessage message="Aucune donnée à afficher." />
  }
  return (
    <div>
      <ul className="collapsible_list">
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
