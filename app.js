const { exec } = require('child_process')
const { config } = require('./default')

const getProjectList = require('./src/getProjects')
const createProject = require('./src/createProject')

getProjectList().then((result) => {
  result.forEach((project) => {
    createProject(project, config)
  })
})
