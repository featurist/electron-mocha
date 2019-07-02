const { remote } = require('electron')
const remoteConsole = remote.require('console')

process.env.DEBUG_COLORS_NODE = 'on'

;[
  'log',
  'info',
  'warn',
  'error',
  'dir',
  'table',
  'count',
  'countReset',
  'group',
  'groupCollapse',
  'groupEnd',
  'trace',
  'time',
  'timeEnd',
  'timeLog'
].forEach(method => {
  console[method] = (...args) => {
    remoteConsole[method](...args)
  }
})
