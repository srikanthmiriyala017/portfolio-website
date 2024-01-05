import './index.css'
import ProjectCard from '../ProjectCard'
import ProjectContext from '../../context/ProjectContext'
import Header from '../Header'

const Projects = () => (
  <ProjectContext.Consumer>
    {value => {
      const {projectsList} = value
      return (
        <div className="route2">
          <Header />
          <div className="responsive">
            <h2 className="projectsPageTitle">Projects</h2>

            {projectsList.map(eachItem => (
              <ProjectCard projectDetails={eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>
      )
    }}
  </ProjectContext.Consumer>
)
export default Projects
