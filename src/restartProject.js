const fs = require('fs')
const path = require('path')
const { exec, execSync } = require('child_process')
const kill = require('tree-kill')

const startProject = function (project, config) {
  let projectPath = path.join(config.rootPath, project.name)

  let install = execSync(`cnpm install`, { cwd: projectPath })
  return exec('node app.js', { cwd: projectPath })
}

const restartProject = function (project, config, process) {
  let run = null
  if (process) {
    kill(process.pid, () => {
      run = startProject(project, config)
    })
    console.log(`${project.name} terminated`)
  } else {
    run = startProject(project, config)
  }

  console.log(`${project.name} started`)
  return {
    name: project.name,
    process: run,
  }
}

module.exports = restartProject
