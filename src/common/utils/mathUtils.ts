//path src/common/utils/MathUtils.ts

/**
 * Calculates the percentage of one number relative to another.
 * @param amount - The value to be converted to a percentage.
 * @param total - The total value.
 * @returns A string representation of the percentage with two decimal places.
 */
export const calculatePercentage = (amount: number, total: number) => {
  return ((amount / total) * 100).toFixed(2)
}
