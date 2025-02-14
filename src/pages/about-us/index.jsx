import Banner from '../../components/banner'
import Collapsible from '../../components/collapsible'
import { aboutList } from '../../aboutList'

const AboutUs = () => {
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
    <div className="aboutUs">
      <Banner aboutUs={true} />
      <div className="aboutUs__content">
        <Collapsible list={aboutList} />
      </div>
    </div>
  )
}

export default AboutUs
