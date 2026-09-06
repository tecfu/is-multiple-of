"use strict"

const DECIMAL_PATTERN = /^([+-]?)(?:(\d+)(?:\.(\d*))?|\.(\d+))(?:[eE]([+-]?\d+))?$/
const MAX_EXPONENT = 1000

function parseDecimal (value) {
  let input

  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new TypeError("Inputs must be finite numbers or numeric strings")
    }
    input = value.toString()
  } else if (typeof value === "string") {
    input = value.trim()
    if (input.length === 0) {
      throw new TypeError("Inputs must be finite numbers or numeric strings")
    }
  } else {
    throw new TypeError("Inputs must be finite numbers or numeric strings")
  }

  const match = DECIMAL_PATTERN.exec(input)
  if (!match) {
    throw new TypeError("Inputs must be finite numbers or numeric strings")
  }

  const sign = match[1] === "-" ? -1n : 1n
  const integerPart = match[2] || "0"
  const fractionPart = match[3] !== undefined ? match[3] : (match[4] || "")
  const exponent = Number(match[5] || 0)

  if (!Number.isSafeInteger(exponent) || Math.abs(exponent) > MAX_EXPONENT) {
    throw new RangeError(`Exponent magnitude must not exceed ${MAX_EXPONENT}`)
  }

  let digits = `${integerPart}${fractionPart}`.replace(/^0+(?=\d)/, "")
  let scale = fractionPart.length - exponent

  if (scale < 0) {
    digits += "0".repeat(-scale)
    scale = 0
  }

  return { coefficient: sign * BigInt(digits || "0"), scale }
}

function isMultipleOf (dividend, divisor) {
  const left = parseDecimal(dividend)
  const right = parseDecimal(divisor)

  if (left.coefficient === 0n && right.coefficient === 0n) return true
  if (left.coefficient === 0n || right.coefficient === 0n) return false

  const scale = Math.max(left.scale, right.scale)
  const leftInteger = left.coefficient * 10n ** BigInt(scale - left.scale)
  const rightInteger = right.coefficient * 10n ** BigInt(scale - right.scale)

  return leftInteger % rightInteger === 0n
}

module.exports = isMultipleOf
