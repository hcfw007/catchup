const fs = require('fs')
const path = require('path')

const projectPath = path.join(__dirname, '..', 'projects')
const getProjectList = () =>
  new Promise((resolve, reject) => {
    fs.readdir(projectPath, (err, files) => {
      if (err) {
        reject(err)
        return
      }
      let projectList = []
      files.forEach((file) => {
        projectList.push(require(path.join(projectPath, file, 'project-info')))
      })
      resolve(projectList)
    })
  }).catch((err) => {
    console.error(err)
  })

module.exports = getProjectList
