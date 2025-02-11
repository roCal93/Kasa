import React, { useState } from 'react'
import Banner from '../../components/banner'
import Collapsible from '../../components/collapsible'
import { aboutList } from '../../aboutList'

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false)
  const toggleContent = (id) => {
    setShowMore(!showMore)
  }
  return (
    <div className="aboutUs">
      <Banner aboutUs={true} />
      <div className="aboutUs__content">
        <ul>
          {aboutList.map((data) => (
            <li key={data.id}>
              <div>
                <h2>{data.title}</h2>
                <button onClick={toggleContent}>
                  <i
                    className={
                      showMore
                        ? 'fa-solid fa-chevron-down'
                        : 'fa-solid fa-chevron-up'
                    }
                  ></i>
                </button>
              </div>
              {showMore && <p>{data.content}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AboutUs
