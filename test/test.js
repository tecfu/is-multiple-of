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
    assert.equal(false, isMultipleOf(4.57, 0.000003)) // max places before notation
  })

  it("should detect false when input up to 16 digits or 6 decimal places", function () {
    assert.equal(false, isMultipleOf(3333333333333333.000017, 0.000017)
    ) // max places before notation
  })

  it("should throw an error when inputs are more than 16 digits long", function () {
    expect(function () {
      isMultipleOf(33333333333333333, 0.000017)
    }).to.throw("Numbers more than 16 digits long are not evaluated with precision in javascript.")
  })

  it("should throw an error when inputs are converted to negative exponent scientific notation", function () {
    expect(function () {
      isMultipleOf(-0.00000000000000000007, 2)
    }).to.throw("Numbers in scientific notation are not evaluated with precision in javascript")
  })

  it("should throw an error when inputs are NaN", function () {
    expect(function () {
      isMultipleOf("H", 2)
    }).to.throw("Inputs must be numbers")
  })
})
