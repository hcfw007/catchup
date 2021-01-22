const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const updateProject = function (project, config) {
  let projectPath = path.join(config.rootPath, project.name)

  let pull = execSync(`git pull`, { cwd: projectPath })
  return pull.toString().includes('Already up to date.')
}

module.exports = updateProject
