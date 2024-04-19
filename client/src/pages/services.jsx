import ErrorModal from "../containers/errorModal"
import Clustermap from "../containers/maps/clustermap"


function Services() {
  return (
    <div>
      <Clustermap />
      <ErrorModal show={false} />
    </div>
  )
}

export default Services