import RoadmapItem from './RoadmapItem'

const RoadmapBlock = () => {
  return (
    <div className="ui-page-block">
      <div className="g-container">
        <h2 className="t-block-title t-dark">Roadmap</h2>

        <div className="ml-10">
          <RoadmapItem date="Q2 2022" title="Launch">
            <div className="flex">
              <div className="block"></div>
            </div>
          </RoadmapItem>

          <RoadmapItem date="Q3 2022" title="First IDOs">
            <div className="block"></div>
          </RoadmapItem>

          <RoadmapItem date="Q4 2022" title="Governance">
            <div className="block"></div>
          </RoadmapItem>

          <RoadmapItem date="2023" title="Astraly 2.0">
            <div className="block"></div>
          </RoadmapItem>
        </div>
      </div>
    </div>
  )
}

export default RoadmapBlock
