'use strict'

const assert = require('assert')
const remote = require('electron').remote

describe('mocha.opts', () => {
  it('--require modules are loaded', () => {
    assert.strictEqual(true, window.required)
  })

  it('--script modules are loaded', () => {
    assert.strictEqual(true, window.preloaded)
  })

  it('--require-main modules are loaded in the main process', () => {
    assert.strictEqual(true, remote.getGlobal('requiredMain'))
  })

  it('--require-main modules are loaded before "ready"', () => {
    assert.strictEqual(true, remote.getGlobal('requiredMainBeforeReady'))
  })
})
