const isMultipleOf = require("../")
const assert = require("assert")
const chai = require("chai")
const expect = chai.expect

describe("isMultipleOf", function () {
  it("should return false when divisor is zero but dividend is nonzero", function () {
    assert.equal(false, isMultipleOf(1, 0))
  })

  it("should return false when dividend is zero but divisor is nonzero", function () {
    assert.equal(false, isMultipleOf(0, 1))
  })

  it("should return true when dividend and divisor are zero", function () {
    assert.equal(true, isMultipleOf(0, 0))
  })

  it("should return true when float divided by float", function () {
    assert.equal(true, isMultipleOf(1.1, 0.01))
  })

  it("should return true when dividend is a multiple of divisor", function () {
    assert.equal(true, isMultipleOf(9, 3))
  })

  it("should return true when dividend is a multiple of divisor and inputs are strings", function () {
    assert.equal(true, isMultipleOf("9", "3"))
  })

  it("should return false when dividend is not a multiple of divisor", function () {
    assert.equal(false, isMultipleOf(7, 3))
  })

  it("should succeed where others have failed", function () {
    assert.equal(true, isMultipleOf(4.55, 0.05))
  })

  it("should detect true with very small numbers", function () {
    assert.equal(true, isMultipleOf(4.55, 0.000005))
  })

  it("should detect false with very small numbers", function () {
    assert.equal(false, isMultipleOf(4.57, 0.000003))
  })

  it("should support more than six decimal places", function () {
    assert.equal(true, isMultipleOf("1.000000001", "0.000000001"))
  })

  it("should preserve exact large decimal strings", function () {
    assert.equal(true, isMultipleOf("9007199254740993", "3"))
  })

  it("should support scientific notation", function () {
    assert.equal(true, isMultipleOf("7e-20", "1e-20"))
    assert.equal(true, isMultipleOf(1e21, 1e20))
  })

  it("should support negative operands", function () {
    assert.equal(true, isMultipleOf(-9, 3))
    assert.equal(true, isMultipleOf(9, -3))
    assert.equal(false, isMultipleOf(-10, 3))
  })

  it("should reject non-numeric strings", function () {
    expect(function () {
      isMultipleOf("H", 2)
    }).to.throw(TypeError, "Inputs must be finite numbers or numeric strings")
  })

  it("should reject empty strings and coercible non-number values", function () {
    expect(function () { isMultipleOf("", 2) }).to.throw(TypeError)
    expect(function () { isMultipleOf(true, 2) }).to.throw(TypeError)
    expect(function () { isMultipleOf(null, 2) }).to.throw(TypeError)
  })

  it("should reject NaN and Infinity", function () {
    expect(function () { isMultipleOf(NaN, 2) }).to.throw(TypeError)
    expect(function () { isMultipleOf(Infinity, 2) }).to.throw(TypeError)
  })

  it("should reject exponents that are too large", function () {
    expect(function () {
      isMultipleOf("1e1001", "1")
    }).to.throw(RangeError, "Exponent magnitude must not exceed 1000")
  })
})
