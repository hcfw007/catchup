const os = require('os')

module.exports = {
  config: {
    rootPath: os.type() === 'Windows_NT' ? 'C:\\catchup-projcets\\' : '~/',
  },
}
