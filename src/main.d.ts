/**
 * Returns true when `dividend` is an exact multiple of `divisor`,
 * using decimal-exact BigInt arithmetic (no float rounding errors).
 * Accepts finite numbers or decimal numeric strings (incl. scientific notation).
 */
declare function isMultipleOf(dividend: number | string, divisor: number | string): boolean

export default isMultipleOf
