const main = function (dividend, divisor) {
  // type check
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Inputs must be numbers")
  }

  // coerce string to number
  dividend = dividend * 1
  divisor = divisor * 1;

  // check if inputs are in scientific notation
  [dividend, divisor].forEach(x => {
    if (x.toString().length > 16) {
      throw new Error(`Numbers more than 16 digits long are not evaluated with precision in javascript.
Input: ${x}`)
    }

    if (/e[+-](.*)$/.test(x)) {
      throw new Error(`Numbers in scientific notation are not evaluated with precision in javascript.
Input: ${x}`)
    }
  })

  // javascript can't divide floats: i.e. 4.55 / .05 === 90.999999
  // so we convert float inputs to integers
  // get the max number of decimal places
  const maxPlaces = Math.max(...[dividend, divisor].map(x => countDecimals(x)))

  // multiply each input times 10 raised to the max decimal places
  if (maxPlaces > 0) {
    // no, because in js 110.01 * 10 == 1100.1000000000001
    // [dividend, divisor] = [dividend, divisor].map(x => x * Math.pow(10, maxPlaces))
    [dividend, divisor] = [dividend, divisor].map(x => {
      const arr = x.toString().split(".")

      // if no decimal, can safely use math
      if (arr.length === 1) return arr[0] * Math.pow(10, maxPlaces)

      arr[1] = arr[1] + "0".repeat(maxPlaces - arr[1].length)
      return arr.join("")
    })
  }

  // 0 is not a multiple of any number except 0
  if (dividend === 0 && divisor === 0) return true
  if (dividend === 0 || divisor === 0) return false

  // modulus operator substitute if javascript could accurately divide floating points
  // return dividend - ( parseInt( dividend / divisor ) * divisor ) === 0

  // but it cant, so we use integers only
  return dividend % divisor === 0
}

const countDecimals = value => {
  // in case number is very small and formatted in scientific notation
  // const negMatches = (new RegExp(/e-(.*)$/).exec(value))
  // if (negMatches) return negMatches[1]

  // no decimal place
  if (Math.floor(value) === value * 1) return 0

  // decimal place found
  return value.toString().split(".")[1].length
}

module.exports = main
