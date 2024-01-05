import './App.css'
import {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/About'

import Projects from './components/Projects'
import ProjectContext from './context/ProjectContext'

function App() {
  const [projectsList, setProjectsList] = useState([
    {
      id: 1,
      projectName: 'Project Name',
      projectDescription:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      ProjectLink: 'Project Link',
      ProjectImg: 'https://iili.io/J54fEXa.png',
    },
    {
      id: 2,
      projectName: 'Project Name',
      projectDescription:
        'What was your role, your deliverables, if the project was personal, freelancing.',
      ProjectLink: 'Project Link',
      ProjectImg: 'https://iili.io/J54fOmX.png',
    },
    {
      id: 3,
      projectName: 'Project Name',
      projectDescription:
        'You can also add in this description the type of the project, if it was for web, mobile, electron.',
      ProjectLink: 'Project Link',
      ProjectImg: 'https://iili.io/J54fUBf.png',
    },
  ])

  const addproject = project => {
    setProjectsList([...projectsList, project])
  }

  return (
    <div className="App">
      <ProjectContext.Provider value={{projectsList, addproject}}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </ProjectContext.Provider>
    </div>
  )
}

export default App
