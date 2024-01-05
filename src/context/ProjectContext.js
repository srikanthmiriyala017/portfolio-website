import React from 'react'

const ProjectContext = React.createContext({
  projectsList: [],
  addproject: () => {},
})

export default ProjectContext
