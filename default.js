const path = require('path')
let rootPath = path.join(process.env.HOME || process.env.USERPROFILE, 'catchup-projects')

module.exports = {
  config: {
    rootPath,
  },
}
