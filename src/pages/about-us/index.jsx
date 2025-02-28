import Banner from '../../components/banner'
import CollapsibleList from '../../components/collapsibleList'
import { aboutList } from '../../aboutList'

//This page displays its banner as well as collapsibles containing site information.
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Banner aboutUs={true} />
      <div className="aboutUs__content">
        <CollapsibleList list={aboutList} />
      </div>
    </div>
  )
}

export default AboutUs
