var assert = require('assert')

/* global describe it */

describe('mocha.opts', function () {
  it('--require modules are loaded', function () {
    assert.strictEqual(true, global.required)
  })

  it('--require-main modules are loaded', function () {
    assert.strictEqual(true, global.requiredMain)
  })
})
