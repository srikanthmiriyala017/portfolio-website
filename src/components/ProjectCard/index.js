import './index.css'

const ProjectCard = props => {
  const {projectDetails} = props
  const {
    projectName,
    projectDescription,
    ProjectLink,
    ProjectImg,
    id,
  } = projectDetails
  return id % 2 !== 0 ? (
    <div className="projectCard">
      <div className="projectDescription">
        <h2 className="Route2ProjectName">{projectName}</h2>
        <p className="Route2ProjectDesc">{projectDescription}</p>
        <a href={ProjectLink}>
          <button type="button" className="ProjectLink">
            View Project
          </button>
        </a>
      </div>
      <div className="projectImage">
        <img src={ProjectImg} alt="projectImage" className="ImageRight" />
      </div>
    </div>
  ) : (
    <div className="projectCard">
      <div className="projectImage">
        <img src={ProjectImg} alt="projectImage" className="ImageLeft" />
      </div>
      <div className="projectDescription">
        <h2 className="Route2ProjectName">{projectName}</h2>
        <p className="Route2ProjectDesc">{projectDescription}</p>
        <a href={ProjectLink}>
          <button type="button" className="ProjectLink">
            View Project
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
