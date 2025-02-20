import Banner from '../../components/banner'
import CollapsibleList from '../../components/collapsibleList'
import { aboutList } from '../../aboutList'

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
