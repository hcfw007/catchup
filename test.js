process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.')
})

setTimeout(() => {
  console.log('Exiting.')
  process.exit(0)
}, 100)

process.kill(process.pid, 'SIGHUP')
