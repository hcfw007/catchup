const { exec } = require('child_process')
const { config } = require('./default')

const getProjectList = require('./src/getProjects')
const createProject = require('./src/createProject')
const updateProject = require('./src/updateProject')
const restartProject = require('./src/restartProject')

let processes = []

const rotate = function (result) {
  result.forEach((project) => {
    let process = null
    for (let item of processes) {
      if (item.name === project.name) {
        process = item.process
      }
    }
    if (updateProject(project, config)) {
      console.log(`At ${new Date().toString()}, ${project.name} is up to date`)
      if (!process) {
        processes.push(restartProject(project, config))
      }
    } else {
      if (!process) {
        processes.push(restartProject(project, config))
      } else {
        process = restartProject(project, config, process)
      }
    }
  })
  setTimeout(() => rotate(result), 10 * 60 * 1000)
}

getProjectList().then((result) => {
  result.forEach((project) => {
    createProject(project, config)
  })

  rotate(result)
})
