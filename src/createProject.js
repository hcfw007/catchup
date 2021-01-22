const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const createProject = function (project, config) {
  let projectPath = path.join(config.rootPath, project.name)
  fs.mkdirSync(projectPath, { recursive: true })
  try {
    let clone = execSync(`git clone -b ${project.branch} ${project.repository} ${projectPath}`)
  } catch (e) {
    if (e.status === 128) {
      console.log(`git repository ${project.name} already exists`)
    }
  }
}

module.exports = createProject
